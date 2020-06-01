import { QueryCreatorConfig } from './types';

export const FIELDS_CONFIG: QueryCreatorConfig = {
  analysis: ['*'],
  eventCollection: [
    'sum',
    'average',
    'count',
    'count_unique',
    'maximum',
    'minimum',
    'median',
    'percentile',
    'standard_deviation',
    'extraction',
    'select_unique',
  ],
  targetProperty: [
    'average',
    'count_unique',
    'maximum',
    'median',
    'minimum',
    'percentile',
    'select_unique',
    'standard_deviation',
    'sum',
  ],
};
