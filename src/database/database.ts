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
				if (!db.objectStoreNames.contains(DATABASE_NAME)) {
					db.createObjectStore(DATABASE_NAME, { keyPath: 'id' });
				}
			},
		});
	}

	public static async getSingle(id: number): Promise<INote | undefined> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readonly');
		const store = tx.objectStore(DATABASE_NAME);
		return store.get(id);
	}

	public static async getAll(): Promise<INote[]> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readonly');
		const store = tx.objectStore(DATABASE_NAME);
		return store.getAll();
	}

	public static async create(item: INote): Promise<void> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readwrite');
		const store = tx.objectStore(DATABASE_NAME);
		await store.add(item);
	}

	public static async update(item: INote): Promise<void> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readwrite');
		const store = tx.objectStore(DATABASE_NAME);
		await store.put(item);
	}

	public static async clear(): Promise<void> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readwrite');
		const store = tx.objectStore(DATABASE_NAME);
		await store.clear();
	}

	public static async delete(id: number): Promise<void> {
		const db = await this.init();
		const tx = db.transaction(DATABASE_NAME, 'readwrite');
		const store = tx.objectStore(DATABASE_NAME);
		await store.delete(id);
	}
}
