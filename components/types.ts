export interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface HomeProps {
  highlights: Highlight[];
}

export interface HighlightsProps {
  highlights: Highlight[];
}

export interface Activity {
  title: string;
}
export interface Category {
  name: string;
  activities: Activity[];
}
