import React, { useState } from 'react';
import { Mentions } from 'antd';

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

type PrefixType = keyof typeof MOCK_DATA;

const MentionsComponent = () => {
  const [prefix, setPrefix] = useState<string>('@');

  const onSearch = (text: string, prefix: string) => {
    setPrefix(prefix);
  };

  return (
    <Mentions
      style={{ width: '100%' }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={([]).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
  )
}

export default MentionsComponent