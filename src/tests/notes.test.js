import { jest } from '@jest/globals';

jest.unstable_mockModule('../db.js', () => ({
    updateDB: jest.fn(),
    getDB: jest.fn(),
    saveDB: jest.fn(),
}));

const { updateDB, getDB, saveDB } = await import('../db.js');
const { newNote, getAllNotes, removeNote } = await import('../notes.js');

beforeEach(() => {
    updateDB.mockClear();
    getDB.mockClear();
    saveDB.mockClear();
})

test('newNote inserts data and returns it', async () => {
  const note = 'Test note';
  const tags = ['tag1', 'tag2'];
  const data = {
    tags,
    content: note,
    id: Date.now(),
  };
  updateDB.mockResolvedValue(data);

  const result = await newNote(note, tags);
  expect(result.content).toEqual(data.content);
});