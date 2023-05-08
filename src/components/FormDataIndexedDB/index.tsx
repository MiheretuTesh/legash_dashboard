import {useEffect} from "react";

export const FetchFormDataIndexedDB = (onsiteFormData: string, setOnsiteFormData: any) =>{
    useEffect(() => {
        const request = indexedDB.open('onsite-form-data', 2);

        request.onupgradeneeded = (event: any) => {
            const db = event.target.result;
            db.createObjectStore(onsiteFormData, { keyPath: 'id' });
        };

        request.onupgradeneeded = (event: any) => {
            const db = event.target.result;
            db.createObjectStore('onsite-form-data', { keyPath: 'id' });
        };

        request.onsuccess = (event: any) => {
            const db = event.target.result;

            const transaction = db.transaction([onsiteFormData], 'readonly');
            const objectStore = transaction.objectStore(onsiteFormData);
            const getAllRequest = objectStore.getAll();

            getAllRequest.onsuccess = (event: any) => {
                setOnsiteFormData(event.target.result[0]);
            };

            getAllRequest.onerror = (event: any) => {
                console.error('Error getting data:', event.target.error);
            };

        };

        request.onerror = (event: any) => {
            console.error('Error opening database:', event.target.error);
        };
    }, [onsiteFormData, setOnsiteFormData]);

    return null;
};

export const saveStudentToIndexedDb = (formData: any) => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("onsite-form-data", 2);

        request.onerror = (event: any) => {
            reject(event.target.error);
        };

        request.onupgradeneeded = (event: any) => {
            const db = event.target.result;
            db.createObjectStore('onsite-form-data', { keyPath: 'id' });
        };

        request.onsuccess = (event: any) => {
            const db = event.target.result;
            const transaction = db.transaction('onsite-form-data', 'readwrite');
            const objectStore = transaction.objectStore('onsite-form-data');

            // formData.id = 1;
            const request = objectStore.add(formData);


            request.onerror = (event: any) => {
                reject(event.target.error);
                return false;
            };

            request.onsuccess = (event: any) => {
                return true;
            };
        };
    });
};

export const emptyStore = (storeName: any) => {
    const req = indexedDB.deleteDatabase(storeName);
    req.onsuccess = function () {
        console.log("Deleted database successfully");
    };
    req.onerror = function () {
        console.log("Couldn't delete database");
    };
    req.onblocked = function () {
        console.log("Couldn't delete database due to the operation being blocked");
    };
};