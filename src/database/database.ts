import { DATABASE_NAME, DATABASE_VERSION } from '../../config';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { INote } from '../models/models';

interface NotesDB extends DBSchema {
	notesStore: {
		key: number;
		value: INote;
	};
}

export default class Database {
	static readonly dbName = DATABASE_NAME;
	static readonly dbVersion = DATABASE_VERSION;

	private static async init(): Promise<IDBPDatabase<NotesDB>> {
		return openDB<NotesDB>(this.dbName, this.dbVersion, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('notesStore')) {
					db.createObjectStore('notesStore', { keyPath: 'id' });
				}
			},
		});
	}

	static async getSingle(id: number): Promise<INote | undefined> {
		const db = await this.init();
		const tx = db.transaction('notesStore', 'readonly');
		const store = tx.objectStore('notesStore');
		return store.get(id);
	}

	static async getAll(): Promise<INote[]> {
		const db = await this.init();
		const tx = db.transaction('notesStore', 'readonly');
		const store = tx.objectStore('notesStore');
		return store.getAll();
	}

	static async create(item: INote): Promise<void> {
		const db = await this.init();
		const tx = db.transaction('notesStore', 'readwrite');
		const store = tx.objectStore('notesStore');
		await store.add(item);
	}

	static async update(item: INote): Promise<void> {
		const db = await this.init();
		const tx = db.transaction('notesStore', 'readwrite');
		const store = tx.objectStore('notesStore');
		await store.put(item);
	}
}
