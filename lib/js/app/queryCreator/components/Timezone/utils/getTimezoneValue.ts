import { Timezones } from '../../../types';

import { TIMEZONES } from '../constants';

export const getTimezoneValue = (timezone?: number | Timezones) => {
  if (typeof timezone === 'string') return timezone;
  if (typeof timezone === 'number') {
    const namedTimezone = TIMEZONES.find(({ value }) => value === timezone);
    if (namedTimezone) {
      const { name } = namedTimezone;
      return name;
    }
  }

  return null;
};
