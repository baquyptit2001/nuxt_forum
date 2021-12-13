import Pluralize from "pluralize";

export default function pluralize(count, word) {
  return Pluralize(word, count);
}
