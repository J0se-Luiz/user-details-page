import React from 'react';
import * as S from './styles';

interface LoadingProps {
  loading: boolean;
  
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <S.LoadingStyle loading={loading}/>
  );
};

export default Loading;