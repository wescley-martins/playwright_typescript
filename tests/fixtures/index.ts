import { mergeTests } from '@playwright/test';
import { pageFixture } from './page.fixture';
import { dataFixture } from './data.fixture'

export const test = mergeTests(
    pageFixture,
    dataFixture
);

export  { expect } from '@playwright/test';