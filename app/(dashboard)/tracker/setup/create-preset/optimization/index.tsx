import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

import clsx from 'clsx';
import { TrackerOptimization } from '@/enums/Common';
import { usePresetStore } from '@/store';

export default function SetupCreatePresetOptimization() {
  const { optimization, setOptimization } = usePresetStore();

  return (
    <ScrollView className="w-full h-screen bg-black">
      <View className="w-full bg-black flex gap-4 p-4">
        {Object.values(TrackerOptimization).map((optimizationOption) => (
          <Pressable onPress={() => setOptimization(optimizationOption)} key={optimizationOption}>
            <View
              key={optimizationOption}
              className={clsx(
                'bg-gray-800 rounded-lg flex items-left justify-center border-solid border-[1px] border-gray-800 h-14 px-5',
                optimizationOption === optimization && '!bg-gray-500 !border-white',
              )}>
              <Text className="text-white leading-8">{optimizationOption}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
