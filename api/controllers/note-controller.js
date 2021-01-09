var express = require('express');
var router = express.Router();

var connection = require('../config/db-connection');

// Add a newnote to the Database
router.post('/addnew', function (req, res) {
    let note = req.body;
    if (!note) {
      return res.status(400).send({ error:true, message: 'Please provide user' });
    }
    let query = "INSERT INTO mynotes (NoteTopic,NoteContent,IsArchived) values ('"+req.body.NoteTopic+"','"+req.body.NoteContent+"',"+req.body.IsArchived+");";
   connection.query(query, function (error, results, fields) {
  if (error) throw error;
    return res.send({ error: false, data: results, status:'success', message: 'New record has been created successfully.' });
    });
});

// Get a All New Note 
router.get('/getAll', function (req, res) {
    let query = "SELECT * FROM mynotes";
    connection.query(query,function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results, status:true, message: 'users list.' });
    });
});

// Get UnArchieved
router.get('/getAllUnArchived', function (req, res) {
    let query = "SELECT * FROM mynotes where IsArchived="+false+";"
    console.log(query)

    connection.query(query, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results,status:true, message: 'All Unarchieved' });
    });
});

// Get Archieved
router.get('/getAllArchived', function (req, res) {
    let query = "SELECT * FROM mynotes where IsArchived="+true+";"
    connection.query(query, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results,status:true, message: 'All archieved' });
    });
});

//  Update user with id
router.put('/update/:id', function (req, res) {
    let note_id = req.params.id;
    let NoteTopic = req.body.NoteTopic;
    let NoteContent = req.body.NoteContent;
    if (!note_id || !NoteTopic || !NoteContent) {
      return res.status(400).send({ error: user, message: 'Please provide valid credentials' });
    }
    connection.query("UPDATE mynotes SET NoteTopic = ?, NoteContent = ?  WHERE NoteId = ?", [NoteTopic,NoteContent, note_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, status:'success',  message: 'user has been updated successfully.' });
     });
    });

//  Delete user
router.delete('/delete/:id', function (req, res) {
    let note_id = req.params.id;
    if (!note_id) {
        return res.status(400).send({ error: true, message: 'Please provide note_id' });
    }
    connection.query('DELETE FROM mynotes WHERE NoteId = ?', [note_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, status:true, truemessage: 'Record has been deleted successfully.' });
    });
    });

//  Archive a note
router.put('/archive', function (req, res) {
    let note_id = req.body.NoteId;
    let IsArchieved = req.body.IsArchived;
    if (!note_id) {
      return res.status(400).send({ error: note_id, message: 'Please provide user_id ' });
    }
    connection.query("UPDATE mynotes SET IsArchived = ?  WHERE NoteId = ?", [IsArchieved, note_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results,status:'success', message: 'Notes Archived has been updated successfully.'});
     });
    });

// Retrieve notes with id 
router.get('/:id', function (req, res) {
    let note_id = req.params.id;
    if (!note_id) {
     return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    let query = "SELECT * FROM mynotes where NoteId=?";
    connection.query(query, note_id, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results[0], status:true,  message: 'users list.' });
    });
});

module.exports = router;