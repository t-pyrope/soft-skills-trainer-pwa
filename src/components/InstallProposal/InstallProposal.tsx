import React, {useEffect, useRef, useState} from "react";

export const InstallProposal = () => {
    const [showInstallButton, setShowInstallButton] = useState(false)
    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPromptRef = useRef<any>(null);

    useEffect(() => {
        const displayMode = getPWADisplayMode();

        if (displayMode === 'standalone' || displayMode === 'twa') {
            setShowInstallButton(false);
            return;
        }

        const handleDisplayModeChanged = (evt: MediaQueryListEvent) => {
            setShowInstallButton(evt.matches)
        }

        const handleBeforeInstall = (e: Event) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPromptRef.current = e;
            // Update UI notify the user they can install the PWA
            setShowInstallButton(true);
        }

        const handleAppInstalled = () => {
            // Hide the app-provided install promotion
            setShowInstallButton(false);
            // Clear the deferredPrompt so it can be garbage collected
            deferredPromptRef.current = null;
        }

        // @ts-ignore
        window.navigator.getInstalledRelatedApps().then((res) => {
            setShowInstallButton(res.length === 0);
        })

        window.addEventListener('beforeinstallprompt', handleBeforeInstall);
        window.addEventListener('appinstalled', handleAppInstalled);
        window.matchMedia('(display-mode: standalone)').addEventListener('change', handleDisplayModeChanged);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
            window.removeEventListener('appinstalled', handleAppInstalled);
            window.matchMedia('(display-mode: standalone)').removeEventListener('change', handleDisplayModeChanged);
        }
    }, [])

    const handleInstall = () => {
        if (!deferredPromptRef.current) return;
        deferredPromptRef.current.prompt();
    }
    return <>
        {showInstallButton && (<button onClick={handleInstall}>Install</button>)}
    </>
}

function getPWADisplayMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (document.referrer.startsWith('android-app://')) {
        return 'twa';
        // @ts-ignore
    } else if (navigator.standalone || isStandalone) {
        return 'standalone';
    }
    return 'browser';
}