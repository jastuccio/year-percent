# Percent of the Year

Calculates how much of the year we have burned through so far.

## Overview

Percent of the Year extends Day.js with a custom plugin to calculate the percentage of the year that has elapsed. 

It's just something I thought up awhile ago as an interesting way to measure time when thinking about goals.

## Features

- Calculates the percentage of the year passed
- Handles leap years correctly

## Tech Stack

- **TypeScript**
- **Day.js**: Lightweight date manipulation library
- **Jest**: For testing
- **ES Modules**


## Example Usage

```typescript
import dayjs from 'dayjs';
import { yearPercent } from './src/yearPercent';

dayjs.extend(yearPercent);

const now = dayjs();
console.log(`${now.yearPercent()}% of the year has gone by`);
```

## Running Tests

Execute the following command to run the test suite:

```sh
pnpm test
```

## Contributing
This is a personal project, but if you stumble upon it and have ideas for improvements, please open an issue and share them.  

## License
This project is open source and available under the MIT License.