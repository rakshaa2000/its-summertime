import Button from '@material-ui/core/Button';
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#3f50b5' },
      secondary: { main: '#fcb103' },
    },
    customError: { color: 'red' }
  });

var items = ["Eat summery foods like salad, fruit salad, watermelon, smoothies, and ice cream desserts",
        "Make a fresh batch of cold iced tea, iced coffee, or your other favorite iced drink",
        "Read a book in the evening or early morning on your porch or balcony",
        "Go to the library and check out the new summer releases",
        "Clean out your closet – now that the winter season is over, it’s time to give away the things that you didn’t wear",
        "Go swimming (or take swim lessons)", 
        "Treat yourself to ice cream and enjoy it in a park",
        "Shop at the local farmer’s market or flea market",
        "Try a New Hobby – sowing, crocheting, writing, blogging, running…if you hate it, you can give it up at the end of the summer",
        "Travel – visit a national park, go to a new city, fly to another continent, have a lazy day at the beach",
        "Be a local tourist – visit all of the famous places in the towns nearby you. Live like a tourist",
        "Host a summer themed party (Hawaii Aloha themed party anyone?)",
        "Be active – bike ride, go on a walk, play a sport, fly a kite, buy chalk and play hopscotch",
        "Revisit your alma mater and think about all of the ways it’s changed",
        "Write letters to friends—near and far",
        "Learn a new skill – a foreign language, how to code, how to swim or do a handstand",
        "Picnic in the Park – complete with lawn games, frisbee, or another outside game",
        "Go pick strawberries, berries, or apples",
        "Have a movie marathon",
        "Go to a skating rink",
        "Have a pool day or go to a water park",
        "Take a road trip",
        "Go hiking or walk on a new trail nearby",
        "Attend a summer festival – check the homepages of the cities nearby you to see if there are any coming up",
        "Visit a theme park and ride all the rollercoasters",
        "Have a board game night and have everyone bring their favorite game",
        "Host a barbecue in your background or apartment courtyard – make it a potluck and invite friends",
        "Go see fireworks for the fourth of July or do some a fireworks display with sparklers",
        "Do a volunteer project that’s outside, like planting trees in your local neighborhood",
        "Reflect on the past few months with journal prompts and do a reflection activity",
        "Make a photo album or collage of all your favorite bestie memories",
        "Do a DIY project together – make frames, knit something, decorate notebooks, paint a picture, make a homemade face mask or scrub, make friendship bracelets",
        "Do each other’s nails and give each other a makeover",
        "Plan a road trip or a week abroad",
        "Read through your old journals or notes together and reminisce (Remember that guy I liked in the 7th grade? What was I thinking?)",
        "Go see one of your favorite old movies at a drive in theater",
        "Have a dance party to your favorite songs (old and new!)",
        "Play a who-knows-who better game like in Friends",
        "Read more! Make a list of all of the books that you’ve wanted to read but have been putting off. Use summer to read some and knock them off of your list.",
        "Catch up with old friends",
        "Revamp an old skill – this could be picking up an old hobby you used to enjoy or investing time to get better at something, like a foreign language",
        "Do something out of your comfort zone – perform music at a coffee shop, submit a story to a fiction publication, sing in front of people at karaoke, go ziplining…",
        "Research your next career move. Thinking about going to grad school? Want to network more in a certain industry? Make a plan to do it this summer.",
        "Make time for myself. Plan some “Me-days” where you focus on resting and taking care of yourself.",
        "Run or walk a race together – find one near you, train together, and then run together.",
        "To help everyone read more, start a book club. Each person can pick a new book every two weeks and then meet at someone’s house to discuss.",
        "Conquer a Fear – no one likes to face their fears, but it’s always less scary with a group of friends nearby.",
        "Watch a TV series or movie series together and discuss over dinner or dessert.",
        "Clean out your closets and host a joint garage sale.",
        "Support a local organization by volunteering for a service project or raising money for the cause.",
        "Play frisbee in the park",
        "Board Game Night",
        "Stargazing and Cloud Watching",
        "Borrow books from the library",
        "Have a movie marathon of old movies from your childhood",
        "Write letters to your friends",
        "Clean out your closet and do other summer cleaning (isn’t it time to flip your mattress?)",
        "Call an old friend and catch up",
        "See if any museums have a free admission day during the summer – be sure to attend!",
        "Eat breakfast in bed (it always feels extravagant)",
        "Have your own spa night (a nice bath, a face mask, nice candles, and soothing music)",
        "Drive a scenic route near your house",
        "Do an escape room with a group of friends or family ",
        "Make your favorite summer foods – desserts, iced beverages, fruit salads, etc.",
        "Attend a local festival, see if any venues nearby are hosting concerts, be a local tourist",
        "Spend a day at the pool or in the park",
        "Watch the sunrise or sunset",
        "Do a home DIY project to spruce up your home",
        "Start an herb garden or flower garden",
        "Spend time with family and friends — playing games, sharing a meal, trying a new restaurant",
        "Attend Hackathons xD",
        "Rickroll your bestfriend"
    ]
class RandomAct extends React.Component{
    constructor() {
        super();
        this.state = {item: items[Math.floor(Math.random()*items.length)]};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = () => {
        var text = items[Math.floor(Math.random()*items.length)];
        this.setState({item: text});
    }
    render(){
        return(
            <div className="body">
            <Card className="Card" raised="true">
            <h1><i>Fun Activities to stay sane in Summer</i></h1>
            <h2>{this.state.item}</h2>
            <MuiThemeProvider theme = {theme}>
            <Button variant="contained" color="secondary" onClick={this.handleChange}>Another Idea</Button>
            </MuiThemeProvider>
            </Card>
            </div>
        );
    }
    
}
export default RandomAct;
