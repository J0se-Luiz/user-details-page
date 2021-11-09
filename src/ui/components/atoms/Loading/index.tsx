import React from 'react';
import * as S from './styles';

interface LoadingProps {
  loading: string;
  
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <S.LoadingStyle loading={loading}/>
  );
};

export default Loading;