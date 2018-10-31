import React from 'react';
import Text from './text';
import MS from './multi-select';
import IYE from './iye';
import INE from './ine';
import OFFICE from './office';
import BS from './bs';
import EMPLOYEES from './employees';
import LICENSES from './licenses';
import AMOUNT from './amount';
import FILE from './file';
import FREQUENTLY from './frequently';
import PERCENT from './percentage';

const Fields = (props) => {
  const { fields } = props;
  const getQuestion = (q, index) => {
    const current_question = fields.get(index);
    const { type, id } = current_question;
    const name = `${q}.answer`;
    switch (type) {
      case 'TEXT': return <Text questionInfo={current_question} key={id} name={name} />;
      case 'MS': return <MS questionInfo={current_question} key={id} name={name} />;
      case 'YN-YE': return <IYE questionInfo={current_question} key={id} name={name} />;
      case 'YN-NE': return <INE questionInfo={current_question} key={id} name={name} />;
      case 'OFFICES': return <OFFICE questionInfo={current_question} key={id} name={name} />;
      case 'BS': return <BS questionInfo={current_question} key={id} name={name} />;
      case 'EMPLOYEES': return <EMPLOYEES questionInfo={current_question} key={id} name={name} />;
      case 'LICENSES': return <LICENSES questionInfo={current_question} key={id} name={name} />;
      case 'AMOUNT': return <AMOUNT questionInfo={current_question} key={id} name={name} />;
      case 'FILE': return <FILE questionInfo={current_question} key={id} name={name} />;
      case 'FREQUENTLY': return <FREQUENTLY questionInfo={current_question} key={id} name={name} />;
      case 'PERCENT': return <PERCENT questionInfo={current_question} key={id} name={name} />;
      default: return null;
    }
  };

  const questions = fields.map(getQuestion);

  return <div>{questions}</div>;
};

export default Fields;
