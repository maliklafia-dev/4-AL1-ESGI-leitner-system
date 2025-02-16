import { useState, useEffect } from "react";
import { Container, Typography, Box, Grid2, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import FlipCard from "./components/CustomCard";

export default function CardsPage() {
  const categories = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "DONE"]; 
  const [cards, setCards] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cards`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des cartes");
        }
        const data = await response.json();
        setCards(data);

        const extractedTags = data
          .map((card) => card.tag) 
          .filter((tag, index, self) => self.indexOf(tag) === index); 
          
        setTags(extractedTags);
      } catch (error) {
        console.error("Erreur API:", error);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = cards.filter(
    (card) =>
      (selectedTag === "" || card.tag === selectedTag) &&
      (selectedCategory === "" || card.category === selectedCategory)
  );

  return (
      <Container maxWidth="md">
        <Box mt={5} textAlign="center">
          <Typography variant="h3" color="primary" gutterBottom>
            List of Cards
          </Typography>

          <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
            <InputLabel>Filter by Tag</InputLabel>
            <Select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter by Category</InputLabel>
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Grid2 container spacing={5} mt={3}>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => <FlipCard key={card.id} question={card.question} answer={card.answer} tag={card.tag} category={card.category} />)
          ) : (
            <Typography variant="h6" color="textSecondary" textAlign="center" sx={{ mt: 4, width: "100%" }}>
              Aucune carte trouvée.
            </Typography>
          )}
        </Grid2>
      </Container>
  );
}


