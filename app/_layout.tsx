import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    // GestureHandler is strictly required for the swipe-to-open drawer gesture
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      {/* This creates the top header and side menu */}
      <Drawer>
        <Drawer.Screen 
          name="index" // Points to your clean index.tsx
          options={{ 
            drawerLabel: 'Home', 
            title: 'Dashboard' 
          }} 
        />
        {/* You can add your SubTabs here later when you create them */}
      </Drawer>

    </GestureHandlerRootView>
  );
}