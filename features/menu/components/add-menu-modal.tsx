import { UiButton, UiText } from "@/components";
import { UiForm, UiFormInput } from "@/components/form";
import { useForm } from "react-hook-form";
import {
  MenufyTheme,
  Modal,
  ModalProps,
  Portal,
  useTheme,
} from "react-native-paper";

interface AddMenuModalProps extends Omit<ModalProps, "children"> {
  test?: boolean
}

function AddMenuModal({ onDismiss, ...props }: AddMenuModalProps) {
  const { colors } = useTheme<MenufyTheme>();
  const {control} = useForm()

  return (
    <Portal >
      <Modal onDismiss={onDismiss} contentContainerStyle={{ height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingHorizontal: '4%', display: 'flex' }} {...props}>
        <UiForm
          customStyle={{
            backgroundColor: colors.primary,
            paddingHorizontal: 20,
            height: '30%',
            borderRadius: 10,
            gap:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UiText variant='headlineSmall'>Add New Menu</UiText>
          <UiFormInput name="menu" control={control} label={'Menu Name'}/>
          <UiButton customStyle={{width: '100%'}} onPress={() => {onDismiss!()}}>Submit</UiButton>
        </UiForm>
      </Modal>
    </Portal>
  );
}

export default AddMenuModal;
