import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
const setting = () => {
  return (
    <View style={{flex:1,backgroundColor:"#EFEFF3", marginTop: 20 }}>
      <ScrollView>
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={{ color: "#828286", fontSize: 15 }}>HIRAGANA SETS</Text>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white" }}>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#EA4559",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",

                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                Hiragana
              </Text>
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Basic Japanses alphabet
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#EA4559",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                Voiced Hiragana
              </Text>
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Muddied consonant
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#EA4559",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                Combined Hiragana
              </Text>
              <Text
                style={{
                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                Consonant + Small
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
          <Text style={{ color: "#828286", fontSize: 15 }}>KATAKANA SETS</Text>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white" }}>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#F19E3B",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                Katakana
              </Text>
              <Text
                style={{
                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                Foreign pronunciation alphabet
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#F19E3B",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                Voiced katakana
              </Text>
              <Text
                style={{
                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                Muddied consonant
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                backgroundColor: "#F19E3B",
                padding: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                gfd
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 20,
                  justifyContent: "center",
                }}
              >
                Combined Katakana
              </Text>
              <Text
                style={{
                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                Combined + small
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={{ color: "#828286", fontSize: 15 }}>PREFERENCES</Text>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "white" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text
              style={{
                alignItems: "center",
                fontSize: 20,
                justifyContent: "center",
              }}
            >
              Card Front Size
            </Text>

            <Text
              style={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Japanese
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Katakana Card Color
            </Text>

            <Text
              style={{
                alignItems: "center",
                textAlign: "right",
                justifyContent: "center",
              }}
            >
            Toggle
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default setting;
