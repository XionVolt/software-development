# 🧠 [Entity-Relationship (ER) Modeling](https://youtu.be/LowjDtiNlk4?si=mKKODr9k4lZ5g4iM)

**Entity-Relationship (ER) Modeling** is a **visual design approach** used to **model the structure of a database** by defining the key elements:

---

## 🔷 What it Does

It shows **entities**, their **attributes**, and the **relationships** between them — typically in the form of an **ER diagram** (ERD).

---

## 📌 Key Components

| Concept         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Entity**      | A thing or object (real-world or abstract) that we want to store data about |
| **Attribute**   | A property or characteristic of an entity                                   |
| **Relationship**| A logical connection between two entities                                   |

---

## 📘 Example

Let’s say you want to model a university database:

### 🔸 Entities(We referred to here Tables):
- `Student`
- `Course`
- `Professor`

### 🔸 Attributes(What those tables attributes(columns) going to be):
- **Student**: `StudentID`, `Name`, `Email`
- **Course**: `CourseID`, `Title`, `Credits`
- **Professor**: `ProfID`, `Name`, `Department`

### 🔸 Relationships:
- `Student` **enrolls in** `Course` (Many-to-Many)
- `Professor` **teaches** `Course` (One-to-Many)

---

## 🎯 Why Use ER Modeling?

- To **plan** your database before creating tables
- To **understand relationships** between data
- To **identify primary and foreign keys**
- To **normalize** data and avoid redundancy


----

Steps for creating ERDs:
1. [Extracting information requirements](https://youtu.be/LowjDtiNlk4?si=txISd48XPYi4yZtg&t=57)
   - [Database need to keep track of relationship between things](https://youtu.be/LowjDtiNlk4?si=P2QA7LJFdaICzWB0&t=177)

2. [Cardinality, means how many of one thing are associated with how many of another thing](https://youtu.be/LowjDtiNlk4?si=68yzWrzknd8hOuTz&t=247)

---- 
## Few differences between ER and Relational Model

In Entity-Relationship (ER) modeling, an entity typically represents a real-world object or concept, and when implemented in a relational database, it becomes a table.

## 🔄 Mapping ER Model to Relational Model:

| ER Concept       | Relational Model Equivalent   |
| ---------------- | ----------------------------- |
| **Entity**       | **Table**                     |
| **Attribute**    | **Column**                    |
| **Entity Set**   | **Table rows (records)**      |
| **Relationship** | **Foreign Key + Table Links** |

## Example:
### In ER Model:

- Entity: `Student`
   - Attributes: `StudentID`, `Name`, `Email`

- Relationship: `enrolls in` between `Student` and `Course`

### In Relational Model:

- Table: `Students`
   - Columns: `StudentID`, `Name`, `Email`

- Table: `Courses`

- Table: `Enrollments` (to manage the relationship, using foreign keys)

So `entities` become `tables` when the ER model is converted to a database schema.