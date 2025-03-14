import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  Modal,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

import { BaseButton } from "@/core/Buttons";
import { Link, router, useRouter } from "expo-router";
import { useTrackerStore } from "@/store/trackerStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TrackerMode, TrackerOptimization } from "@/enums/Common";
import { useGlobalStore, usePresetStore } from "@/store";
import {
  CompositeNavigationProp,
  NavigationProp,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { CreatePresetTabParamList } from "@/types/components";
import clsx from "clsx";

export type SetupCreatePresetOptimizationProps = NativeStackScreenProps<
  CreatePresetTabParamList,
  "Optimization"
>;

export default function SetupCreatePresetOptimization({
  navigation,
}: SetupCreatePresetOptimizationProps) {
  const { optimization, setOptimization } = usePresetStore();

  return (
    <ScrollView className="w-full h-screen bg-black">
      <View className="w-full bg-black flex gap-4 p-4">
        {Object.values(TrackerOptimization).map((optimizationOption) => (
          <Pressable
            onPress={() => setOptimization(optimizationOption)}
            key={optimizationOption}
          >
            <View
              key={optimizationOption}
              className={clsx(
                "bg-gray-800 rounded-lg flex items-left justify-center border-solid border-[1px] border-gray-800 h-14 px-5",
                optimizationOption === optimization &&
                  "!bg-gray-500 !border-white"
              )}
            >
              <Text className="text-white leading-8">{optimizationOption}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
