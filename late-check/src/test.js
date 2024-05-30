import React, { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
async function fetchData() {
    const filter = {};

    const client = await MongoClient.connect(
        'mongodb://localhost:27017/',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('local').collection('startup_log');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    await client.close();
    return result;
}

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
        }
        getData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    {JSON.stringify(item)}
                </div>
            ))}
        </div>
    );
}

export default Test;

