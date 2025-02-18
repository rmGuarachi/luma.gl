import React from 'react';
// Note: this is internal API and may change in a future release
// https://github.com/facebook/docusaurus/discussions/7457
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {MainExamples, ExamplesGroup, ExampleCard, ExampleHeader, ExampleTitle} from './styled';

function renderItem(item, getThumbnail) {
  const imageUrl = useBaseUrl(getThumbnail(item));
  const {label} = typeof item === 'string' ? {label: item} : item;
  const {href} = typeof item === 'string' ? {href: item} : item;;
  return (
    <ExampleCard key={label} href={`examples/${href}`}>
      <img width="100%" src={imageUrl} alt={label} />
      <ExampleTitle>
        <span>{label}</span>
      </ExampleTitle>
    </ExampleCard>
  );
}

function renderCategory({label, items}, getThumbnail) {
  return [
    <ExampleHeader key={`${label}-header`}>{label}</ExampleHeader>,
    <ExamplesGroup key={label}>{items.map(item => renderItem(item, getThumbnail))}</ExamplesGroup>
  ];
}

export function ExamplesIndex({getThumbnail, sidebar}) {
  sidebar = sidebar || useDocsSidebar();

  return (
    <div>
      <div style={{height: 100}} key="index">
        {' '}
      </div>
      <MainExamples>
        {sidebar.map(item => {
          if (item.type === 'category') {
            return renderCategory(item, getThumbnail);
          }
          return null;
        })}
      </MainExamples>
    </div>
  );
}
