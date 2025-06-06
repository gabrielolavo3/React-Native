import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <WebView
        source={{ uri: 'https://tubular-trifle-31092f.netlify.app/' }} // substitua pelo seu link
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        allowsFullscreenVideo
        renderLoading={() => (
          <ActivityIndicator size="large" color="#00ffcc" style={{ flex: 1 }} />
        )}
      />
    </View>
  );
}
