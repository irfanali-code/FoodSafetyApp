import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tabs screenOptions={{
        headerShown: true,

        // 1. THIS IS THE FIX: It forces a global title for every tab
        headerTitle: 'Food Safety App',

        // 2. The global login button
        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <Button title="Login" onPress={() => setModalVisible(true)} />
          </View>
        ),

        // 3. Active/inactive tint colors for the tab icons
        tabBarActiveTintColor: '#2e78b7',
        tabBarInactiveTintColor: '#8e8e93',
      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="CheckProduct"
          options={{
            title: 'Check Product',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            title: 'Report',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'flag' : 'flag-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="StaySafe"
          options={{
            title: 'Stay Safe',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'shield-checkmark' : 'shield-checkmark-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>

      {/* The Login Popup (Modal) remains exactly the same */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.popupBox}>
            <Text style={styles.title}>Account Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Email or Phone Number"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                alert('Logging you in...');
                setModalVisible(false);
              }}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupBox: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#2e78b7',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 15,
    padding: 10,
  },
  cancelText: {
    color: '#999',
    fontSize: 16,
  },
});
