import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function App() {
  const [suwat, setSuwat] = useState("");
  const [mensahe, setMensahe] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Add new message
  const handleSendMessage = () => {
    if (suwat.trim()) {
      setMensahe([...mensahe, suwat]);
      setSuwat("");
    }
  };

  // Add new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  // Message bubble renderer
  const renderMessage = ({ item }) => (
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>{item}</Text>
    </View>
  );

  // Comment card renderer
  const renderComment = ({ item }) => (
    <View style={styles.commentCard}>
      <Text style={styles.commentText}>{item}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Messenger Section */}
      <View style={[styles.panelContainer, styles.messengerPanel]}>
        <Text style={styles.messengerHeader}>💬 Messenger</Text>
        <View style={styles.panel}>
          <FlatList
            data={mensahe}
            renderItem={renderMessage}
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
            <TouchableOpacity
              style={[styles.button, styles.messengerButton]}
              onPress={handleSendMessage}
            >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Comment Section */}
      <View style={[styles.panelContainer, styles.commentPanel]}>
        <Text style={styles.commentHeader}>📝 Comments</Text>
        <View style={styles.panel}>
          <FlatList
            data={comments}
            renderItem={renderComment}
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
            <TouchableOpacity
              style={[styles.button, styles.commentButton]}
              onPress={handleAddComment}
            >
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },
  panelContainer: {
    marginBottom: 25,
    width: "100%",
    maxWidth: 360,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  panel: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    minHeight: 200,
  },
  messages: {
    flexGrow: 0,
    marginBottom: 10,
  },

  // Messenger section
  messengerPanel: {
    backgroundColor: "#e3f2fd", // light blue
  },
  messengerHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1565c0",
  },
  messageBubble: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  messengerButton: {
    backgroundColor: "#1565c0",
  },

  // Comment section
  commentPanel: {
    backgroundColor: "#e8f5e9", // light green
  },
  commentHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2e7d32",
  },
  commentCard: {
    backgroundColor: "#c8e6c9",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  commentText: {
    fontSize: 15,
    color: "#1b5e20",
  },
  commentButton: {
    backgroundColor: "#2e7d32",
  },

  // Shared styles
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});