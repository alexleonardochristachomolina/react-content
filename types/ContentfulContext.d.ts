// TypeScript Version: 3.0

import { Context } from 'react';
import {
  ContentfulClientApi,
  ContentfulClientParams,
} from './ContentfulClient';

export interface ContextProps<T = any> {
  client: T;
}

export interface AnyContextProps extends ContextProps {
  [extraProps: string]: any;
}

export interface ContentfulContextValue<A extends ContextProps = AnyContextProps> {
  client: ContentfulClientApi;
  locale?: string;
  renderPromises?: boolean;
}

export class ContentfulContext {}

export default ContentfulContext;
