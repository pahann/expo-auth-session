import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { BareSessionUrlProvider } from './BareSessionUrlProvider';
import { ManagedSessionUrlProvider } from './ManagedSessionUrlProvider';
export function getSessionUrlProvider() {
    if (Constants.manifest && Platform.OS !== 'web') {
        return new ManagedSessionUrlProvider();
    }
    return new BareSessionUrlProvider();
}
//# sourceMappingURL=SessionUrlProvider.js.map