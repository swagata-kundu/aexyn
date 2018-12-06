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
import YD from './year-data';
import PROJECTDETAIL from './project-detail';
import PROJECTLIST from './project-list';
import CONTACTS from './company-contacts';
import AFFILIATIONS from './affiliations';
import UNION from './union';
import YND from './ynd';
import YN from './yn';
import WORKERS from './workers';
import EMAILS from './emails';
import NUMBER from './number';

const Fields = ({ questions }) => {
  const getQuestion = (q) => {
    const {
      type, id,
    } = q;
    q.answer = q.answer ? q.answer : {};
    switch (type) {
      case 'TEXT': return <Text key={id} {...q} />;
      case 'NUMBER': return <NUMBER key={id} {...q} />;
      case 'MS': return <MS key={id} {...q} />;
      case 'YN-YE': return <IYE key={id} {...q} />;
      case 'YN-NE': return <INE key={id} {...q} />;
      case 'YN-PD': return <YND key={id} {...q} />;
      case 'YN': return <YN key={id} {...q} />;
      case 'OFFICES': return <OFFICE key={id} {...q} />;
      case 'BS': return <BS key={id} {...q} />;
      case 'EMPLOYEES': return <EMPLOYEES key={id} {...q} />;
      case 'LICENSES': return <LICENSES key={id} {...q} />;
      case 'AMOUNT': return <AMOUNT key={id} {...q} />;
      // case 'FILE': return <FILE  key={id} {...q} />;
      case 'FREQUENTLY': return <FREQUENTLY key={id} {...q} />;
      case 'PERCENT': return <PERCENT key={id} {...q} />;
      case '4YRDATA': return <YD key={id} {...q} />;
      case 'PROJECT_DETAIL': return <PROJECTDETAIL key={id} {...q} />;
      case 'PROJECT_LIST': return <PROJECTLIST key={id} {...q} />;
      case 'COMPANY_CONTACT': return <CONTACTS key={id} {...q} />;
      case 'IAFFILIATION': return <AFFILIATIONS key={id} {...q} />;
      case 'UNIONS': return <UNION key={id} {...q} />;
      case 'WORKERS': return <WORKERS key={id} {...q} />;
      case 'EMAILS': return <EMAILS key={id} {...q} />;
      default:
        return null;
    }
  };

  const renderQuestions = questions.map(getQuestion);

  return renderQuestions;
};

export default Fields;
