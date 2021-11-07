import React from 'react';
import * as S from './styles';

interface CompModelProps {
  props?: any;
}

const CompModel: React.FC<CompModelProps> = () => {
  return (
    <S.CompModelStyle>
        <p>CompModel</p>
    </S.CompModelStyle>
  );
};

export default CompModel;