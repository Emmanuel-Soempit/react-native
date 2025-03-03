// @ts-nocheck
import { UiButton, UiText } from "@/components";
import { UiForm } from "@/components/form";
import { successToast } from "@/utils/toasts";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { MenufyTheme, useTheme } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Platform, StyleSheet } from "react-native";

function VerifyOtpForm() {
  const { colors } = useTheme<MenufyTheme>();
  const router = useRouter();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleOnSubmit = () => {
    successToast("Congrats", "Otp Verified");
    router.push("/(auth)/set-password");
  };


  const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 50,
      height: 50,
      lineHeight: 38,
      fontSize: 20,
      fontWeight: 200,
      borderWidth: 1,
      color: colors.textPrimary,
      borderColor: '#00000030',
      backgroundColor: colors.textFieldPrimary,
      textAlign: 'center',
      borderRadius: 10,
      paddingTop: 5
    },
    focusCell: {
      borderColor: '#000',
    },
  });
  return (
    <UiForm >
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <UiText
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : '-')}
          </UiText>
        )}
      />

      <UiButton  customStyle={{marginTop: 20}} onPress={handleOnSubmit}>Continue</UiButton>
    </UiForm>
  );
}




export default VerifyOtpForm;
