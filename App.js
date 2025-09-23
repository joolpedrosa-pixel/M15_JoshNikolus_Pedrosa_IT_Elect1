import React, { useState } from 'react';
import { View, Text, Button, FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [suwat, setSuwat] = useState('');
  const [mensahe, setMensahe] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Add new message
  const handleSendMessage = () => {
    if (suwat.trim()) {
      setMensahe([...mensahe, suwat]);
      setSuwat('');
    }
  };

  // Add new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Reusable message renderer
  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Messenger Section */}
      <View style={[styles.panelContainer, { backgroundColor: '#e6f0ff' }]}>
        <Text style={[styles.header, { color: '#0055cc' }]}>💬 Messenger</Text>
        <View style={[styles.panel, { borderColor: '#0055cc' }]}>
          <FlatList
            data={mensahe}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={suwat}
              onChangeText={setSuwat}
            />
            <Button title="Send" color="#0055cc" onPress={handleSendMessage} />
          </View>
        </View>
      </View>

      {/* Comment Section */}
      <View style={[styles.panelContainer, { backgroundColor: '#e6ffe6' }]}>
        <Text style={[styles.header, { color: '#008000' }]}>📝 Comments</Text>
        <View style={[styles.panel, { borderColor: '#008000' }]}>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messages}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              value={comment}
              onChangeText={setComment}
            />
            <Button title="Post" color="#008000" onPress={handleAddComment} />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // light background
    flexGrow: 1,
  },
  panelContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  panel: {
    width: '100%',
    height: 220,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  messages: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});