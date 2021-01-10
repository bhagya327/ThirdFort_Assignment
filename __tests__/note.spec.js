const supertest = require('supertest');
const app = require('../app');

describe("Testing the Notes API", () => {

    //Get All notes
	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/notes/getAll');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });
    
    // Testing adding n new note
	it("tests the post new record endpoint and returns as success message", async () => {

		const response = await supertest(app).post('/notes/addnew').send({
			NoteTopic: 'test topic',
			NoteContent: 'test content',
			IsArchived: true
		});

		expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');

    });

    //Testing endpoint of getting a note by id
    it("Testing the end point of getting a note by id", async () => {
		const response = await supertest(app).get('/notes/:id');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });

    //Testing endpoint of deleting a note by id
    it("Testing the end point of deleting a note by id", async () => {
		const response = await supertest(app).delete('/notes/delete/:id');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });

    //Testing endpoint of updating a note by id
    it("tests the update end point", async () => {

		const response = await supertest(app).put('/notes/update/:id').send({
			NoteTopic: 'test topic',
			NoteContent: 'test content',
			IsArchived: true
		});

		expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');

    });

    //Testing archiving a note
    it("tests the end point pf archieving a note", async () => {

		const response = await supertest(app).put('/notes/archive').send({
            NoteId: 'test id',
			IsArchived: true
		});

		expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');

    });

    //Get All Archieved
	it("tests getting all the archived notes", async () => {
		const response = await supertest(app).get('/notes/getAllArchived');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });

    //Get All UnArchieved
	it("tests getting all the unarchived notes", async () => {
		const response = await supertest(app).get('/notes/getAllUnArchived');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });
    
});


