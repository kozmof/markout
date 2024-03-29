# [Draft] Markout Specification v0.2.1
Last revision: 2019-10-03

## Table of Contents
- [0. Principle](#0-Principle)
- [1. Table](#1-Table)
- [2. Annotations](#2-Annotations)
  - [2.1 Draft Annotation](#21-Draft-Annotation)
  - [2.2 TO-DO Annotation](#22-TO-DO-Annotation)
  - [2.3 Index Annotation](#23-index-Annotation)
- [3. Timeline](#3-Timeline)
- [4. Column](#4-Column)
- [5. Card](#5-Card)
- [6. Macro](#6-Macro)
  - [6.1 Table of Contents](#61-table-of-contents)
  - [6.2 Index](#62-Index)
- [7. Insert](#7-Insert)
- [8. Fold](#8-Fold)
- [9. Icon](#9-Icon)
- [10. Footnote](#10-Footnote)
---

## Writing Rule
```
<variable_name> : variable which is named as variable_name
HEADER : headers
PATH : path
true : boolean true
false : boolean false
<unsigned_number> : 0, 1, 2, 3, 4, 5...
```
---

## 0. Principle
- File extension: .mo
- Practical useability
- Structured Data
- Simply parseable
- Easily detect error syntax 


## 1. Table
### Format
#### Base
```
=
: header_name_a
: header_name_b
: header_name_c
=
: content_a_1
: content_b_1
: content_c_1
-
: content_a_2
: content_b_2
: content_c_2
-
```

### implementation
- TypeScript: https://github.com/kozmof/markout/blob/master/implementations/ts/TableParser.ts


## 2. Annotations
Annotations are not rendered. They are used as meta data.
### Types
1. Draft
2. TODO
3. Index
### implementation
- TypeScript: 

## 2.1 Draft Annotation
### Format
```
!draft
HEADER
```
### Examle
```
!draft
### Example
this is a draft section.
```
### implementation
- TypeScript: 

## 2.2 TO-DO Annotation
### Format
```
!TODO <text>
```
### implementation
- TypeScript: 

## 2.3 Index Annotation
### Format
```
!{<term>}
```

### implementation
- TypeScript: 

## 3. Timeline
### Format 1
```
- [YYYY/mm/dd H:M:S] <text>
```

### Format 2
```
- [YYYY/mm/dd] <text>
```

### Format 3
```
- [H:M:S] <text>
```

### implementation
- TypeScript: 

## 4. Column
### Format
```
!{
<text 1>
}-{
<text 2>
}-{
<text 3>
}!

```
### implementation
- TypeScript: 

## 5. Card
### Format
```
![
<text>
]!
```

### implementation
- TypeScript: 

## 6. Macro
### Types
- table of contents
- index

## 6.1 Table of Contents
### Format
```
table_of_contents!(HEADER)
```
### implementation
- TypeScript: 

## 6.2 Index
Render annotated terms
### Format
```
index!()
```
### implementation
- TypeScript: 

## 7. Insert
### Format
```
=>[PATH]
```
```
\insert(PATH)
```
### implementation
- TypeScript: 

## 8. Fold
### Format
```
\fold(true)
HEADER
```
### implementation
- TypeScript: 

## 9. Icon
### Format
```
\import('custom_icons')
:expression:
```
### implementation
- TypeScript: 

## 10. Footnote 
### Format
```
<text>[i<unsigned_number>]
[i<u>] <text>
```
### implementation
- TypeScript: 
---
