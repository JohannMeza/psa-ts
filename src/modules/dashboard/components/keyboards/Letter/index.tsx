import { ChangeEvent, FC, PropsWithChildren, useRef, useState } from 'react';
import Keyboard, { KeyboardInput, SimpleKeyboard } from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export const Letter: FC<PropsWithChildren> = () => {
  const [inputs, setInputs] = useState<KeyboardInput>({});
  const [layoutName, setLayoutName] = useState('default');
  const [inputName, setInputName] = useState('default');
  const keyboard = useRef<SimpleKeyboard>();

  const onChangeAll = (inputsAll: KeyboardInput): void => {
    setInputs({ ...inputsAll });
    console.log('Inputs changed', inputsAll);
  };

  const handleShift = (): void => {
    const newLayoutName = layoutName === 'default' ? 'shift' : 'default';
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button: string): void => {
    console.log('Button pressed', button);

    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputVal = event.target?.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    if (keyboard.current) keyboard.current.setInput(inputVal);
  };

  const getInputValue = (inputValue: string): string => inputs[inputValue] || '';

  return (
    <>
      <input
        id="lastName"
        value={getInputValue('lastName')}
        onFocus={() => setInputName('lastName')}
        placeholder={'Last Name'}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r: undefined): void => keyboard.current = r}
        inputName={inputName}
        layoutName={layoutName}
        onChangeAll={onChangeAll}
        onKeyPress={onKeyPress}
      />
    </>
  );
};