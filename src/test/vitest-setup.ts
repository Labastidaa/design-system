import { beforeAll, afterEach, afterAll} from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { server } from '@/mocks/node';

// Start server before all tests
beforeAll(() => server.listen())

// Unmounts React trees that were mounted with render.
afterEach(() => {
  cleanup();
})

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

//  Close server after all tests
afterAll(() => server.close())