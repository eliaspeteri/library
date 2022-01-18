/** Types */
import { Book } from '../types';

/** Book (Mongoose) Model */
import BookModel from '../models/book';

const findById = async (id: string): Promise<Book | null> =>
  await BookModel.findById(id);

const getAll = async (): Promise<Book[]> => await BookModel.find({});

const getLimited = async (limit: number): Promise<Book[]> =>
  await BookModel.find({}).limit(limit);

const removeOne = async (id: string): Promise<unknown> =>
  await BookModel.findByIdAndRemove(id);

const saveOne = async (book: Book): Promise<string> => {
  const newBook = new BookModel({
    ...book,
    whenCreated: new Date()
  });

  await newBook.save();
  return 'New Book posted successfully.';
};

const BookService = {
  findById,
  getAll,
  getLimited,
  removeOne,
  saveOne
};

export default BookService;
