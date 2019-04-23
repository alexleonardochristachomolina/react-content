// TypeScript Version: 3.0

import { Component } from 'react';
import { ContentfulClientApi } from './ContentfulClient';
import ContentfulContext from './ContentfulContext';

export interface ProviderProps {
  client: ContentfulClientApi;
  context: ContentfulContext;
  locale: string;
  renderPromises?: boolean;
}

export default class ContentfulProvider extends Component<ProviderProps> {}
