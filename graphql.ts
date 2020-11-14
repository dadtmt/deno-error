import { gql } from "./deps.ts";

export default gql`
  
  type ReqLevel {
    classe: String!
    level: String!
  }

  type SchoolData {
    school: String!
    subSchool: String
    descriptors: [String]
  }

  type Reference {
    supplement: String!
    page: String
  }
  
  type Spell {
    id: Int!
    name: String!
    description: String!
    castingTime: String!
    components: String!
    url: String!
    range: String
    duration: String
    target: String
    savingThrow: String
    spellResistance: String
    reqLevel: [ReqLevel]
    schoolData: SchoolData!
    reference: Reference!
  }

  type Spellbook {
    id: String!
    name: String!
    spells: [Spell]
  }

  input InputSpellbook {
    name: String
  }

  input InputSpellToBook {
    bookId: String!,
    spellId: Int!
  }

  type ResolveType {
    done: Boolean
  }

  type Query {
    getSpells(searchInName: String): [Spell]
    allSpellbooks: [Spellbook!]
  }

  type Mutation {
    addSpellbook(input: InputSpellbook!):Spellbook!
    addSpellToBook(input:InputSpellToBook):Spellbook!
    removeSpellFromBook(input:InputSpellToBook):Spellbook!
  }
`;