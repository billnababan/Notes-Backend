const { query } = require("../database/Db");

const getNotes = async (req, res) => {
  try {
    const data = await query("SELECT note FROM notes");
    return res.status(200).json({ result: data });
  } catch (error) {
    console.log(error);
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await query("SELECT note from notes WHERE id = ?", [id]);
    return res.status(200).json({ message: "Get Notes is Succes", result: data });
  } catch (error) {
    console.log(error);
  }
};

const addNotes = async (req, res) => {
  const { title, note } = req.body;
  const Datetime = new Date();
  try {
    await query("INSERT INTO notes (title, datetime, note) VALUES(?, ?, ?)", [title, Datetime, note]);
    return res.status(200).json({
      message: "Adding Notes is Success",
      data: {
        ...req.body,
        Datetime,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateNotes = async (req, res) => {
  const { title, note } = req.body;
  const Datetime = new Date();
  const { id } = req.params;
  try {
    await query(
      `UPDATE notes 
       SET title = ?, datetime = ?, note = ?
       WHERE ID = ? 
    `,
      [title, Datetime, note, id]
    );

    return res.status(200).json({
      message: "update Notes is Success",
      data: {
        ...req.body,
        Datetime,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes where id = ?", [id]);
    return res.status(200).json({ pesan: "Delete Notes is Success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNotes,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};
