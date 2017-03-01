var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes", "No"]
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var equalGroupSizes = false;

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "SPR_Introduction-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
                           "Form", {html: 'Was that sentence dashed? <p><input type="text" name="SentenceType"></p>'}],],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                           "Form", {html: 'What type of sentence was that? <p><input type="text" name="SentenceType"></p>'}],    
    ["practice", "DashedSentence", {s: "This is the last practice item before the experiment begins."},
    		  	   "Form", {html: 'Are you ready to begin? <p><input type="text" name="Begin"></p>'}],
    
    ["sep", "Separator", { }], 
    
  //Uncountable Substance//
    //garlic//
    ["ms4-ns", "DashedSentence", {s: "I think there is garlic for the recipe in the pantry."},
    		         "Form", {html: 'What is in the pantry? <p><input type="text" name="Answer"></p>'}],
    ["ms4-np", "DashedSentence", {s: "Do you know where garlics are for the soup?"},
    		         "Form", {html: 'What do you need for the soup? <p><input type="text" name="Answer"></p>'}],
    ["ms4-i",  "DashedSentence", {s: "The cooks were looking for a garlic for the recipe they were making."},
    		         "Form", {html: 'What were the cooks looking for? <p><input type="text" name="Answer"></p>'}],
    ["ms4-ds", "DashedSentence", {s: "I remember that Jeffrey put the garlic on the table earlier."},
    		         "Form", {html: 'What did Jeffrey put on the table? <p><input type="text" name="Answer"></p>'}]
    ["ms4-dp", "DashedSentence", {s: "Do you know who took the garlics and put them in the wrong place?"},
    		         "Form", {html: 'What did they take and put in the wrong place? <p><input type="text" name="Answer"></p>'}],
    //dirt//
    ["ms5-ns", "DashedSentence", {s: "I think if you put dirt in the pot, the plant will grow."},
    		         "Form", {html: 'What should you put in the pot? <p><input type="text" name="Answer"></p>'}],
    ["ms5-np", "DashedSentence", {s: "Do you have dirts for the garden?"},
    		         "Form", {html: 'What do you have for the garden? <p><input type="text" name="Answer"></p>'}],
    ["ms5-i",  "DashedSentence", {s: "John was looking for a dirt to put in the pot with the plant."},
    		         "Form", {html: 'What was John looking for? <p><input type="text" name="Answer"></p>'}],
    ["ms5-ds", "DashedSentence", {s: "I was wondering where the dirt we bought was put."},
    		         "Form", {html: 'What did we buy? <p><input type="text" name="Answer"></p>'}],
    ["ms5-dp", "DashedSentence", {s: "I don't think I have seen the dirts since we arrived home."},
    		         "Form", {html: 'What am I looking for? <p><input type="text" name="Answer"></p>'}],
    //ketchup//
    ["ms6-ns", "DashedSentence", {s: "I would like to have ketchup with my french fries."},
    		         "Form", {html: 'What do I like to have with my french fries? <p><input type="text" name="Answer"></p>'}],
    ["ms6-np", "DashedSentence", {s: "You will have to put kethcups in the refrigerator when we get home."},
    		         "Form", {html: 'What has to be put in the refrigerator? <p><input type="text" name="Answer"></p>'}],
    ["ms6-i",  "DashedSentence", {s: "Please do not forget that a ketchup is needed to finish making this recipe."},
    		         "Form", {html: 'What are you not supposed to forget? <p><input type="text" name="Answer"></p>'}],
    ["ms6-ds", "DashedSentence", {s: "Do you like the taste of the ketchup that we bought earlier today?"},
    		         "Form", {html: 'What did we buy earlier? <p><input type="text" name="Answer"></p>'}],
    ["ms6-dp", "DashedSentence", {s: "she said that the kethcups were put in the refrigerator."},
    		         "Form", {html: 'what was put in the refrigerator? <p><input type="text" name="Answer"></p>'}],
  //Uncountable Object//
    //luggage//
    ["mo4-ns", "DashedSentence", {s: "We have luggage for our travels to Europe this summer."},
    		         "Form", {html: 'What do we have for our European travels/ <p><input type="text" name="Answer"></p>'}],
    ["mo4-np", "DashedSentence", {s: "You will need luggages for your trip to China in December."},
    		         "Form", {html: 'What do you need for your trip to China>?<p><input type="text" name="Answer"></p>'}],
    ["mo4-i",  "DashedSentence", {s: "The family only brought a luggage with them for the trip."},
    		         "Form", {html: 'What did the family bring with them? <p><input type="text" name="Answer"></p>'}],
    ["mo4-ds", "DashedSentence", {s: "The doorman took the luggage to our room on the fifth floor."},
    		         "Form", {html: 'What did the doorman take to our room? <p><input type="text" name="Answer"></p>'}],
    ["mo4-dp", "DashedSentence", {s: "When John and Mary arrived, the luggages were nowhere to be found."},
    		         "Form", {html: 'What did John and Mary lose? <p><input type="text" name="Answer"></p>'}],
    //homework//
    ["mo5-ns", "DashedSentence", {s: "The teacher assigned homework for the weekend before the holiday break."},
    		         "Form", {html: 'What did the teacher assign? <p><input type="text" name="Answer"></p>'}],
    ["mo5-np", "DashedSentence", {s: "Please do not forget that homeworks assigned on Monday are due on Friday."},
    		         "Form", {html: 'What is not to be forgotten? <p><input type="text" name="Answer"></p>'}],
    ["mo5-i",  "DashedSentence", {s: "Every Monday we have a homework due in Math."},
    		         "Form", {html: 'What is due every Monday? <p><input type="text" name="Answer"></p>'}],
    ["mo5-ds", "DashedSentence", {s: "I wonder how difficult the homework for Christine's class will be."},
    		         "Form", {html: 'What might be difficult? <p><input type="text" name="Answer"></p>'}],
    ["mo5-dp", "DashedSentence", {s: "Jessica said that the homeworks were very difficult."},
    		         "Form", {html: 'What did Jessica say was very difficult? <p><input type="text" name="Answer"></p>'}],
    //jewelry//
    ["mo6-ns", "DashedSentence", {s: "Unless bought during the holidays, jewelry can be very expensive."},
    		         "Form", {html: 'What can be very expensive? <p><input type="text" name="Answer"></p>'}],
    ["mo6-np", "DashedSentence", {s: "Do you think jewelries should be sold everywhere?"},
    		         "Form", {html: 'What should be sold everywhere? <p><input type="text" name="Answer"></p>'}],
    ["mo6-i",  "DashedSentence", {s: "Danielle had told me about a jewelry that was yellow and white gold."},
    		         "Form", {html: 'What did Danielle tell me about? <p><input type="text" name="Answer"></p>'}],
    ["mo6-ds", "DashedSentence", {s: "Have you seen the jewelry that the bride is going to wear?"},
    		         "Form", {html: 'What is the bride going to wear? <p><input type="text" name="Answer"></p>'}],
    ["mo6-dp", "DashedSentence", {s: "I cannot believe that the jewelries are not where I left them."},
    		         "Form", {html: 'What did I lose? <p><input type="text" name="Answer"></p>'}],
  //Countable [+prototypical]//
    //dog//
    ["c4-ns", "DashedSentence", {s: "I could not believe dog was all over the floor in the house."},
    		        "Form", {html: 'What was all over the floor? <p><input type="text" name="Answer"></p>'}],
    ["c4-np", "DashedSentence", {s: "In our neighborhood, dogs are always playing in the park."},
    		        "Form", {html: 'What is alway splaying in the park? <p><input type="text" name="Answer"></p>'}],
    ["c4-i",  "DashedSentence", {s: "Sometimes it is hard to find a dog that likes kids as much as adults."},
    		        "Form", {html: 'What is sometimes hard to find? <p><input type="text" name="Answer"></p>'}],
    ["c4-ds", "DashedSentence", {s: "I asked you to let the dog in the house but I do not see him."},
    		        "Form", {html: 'What do I not see? <p><input type="text" name="Answer"></p>'}],
    ["c4-dp", "DashedSentence", {s: "When I came home from work, the dogs were in the garden."},
    		        "Form", {html: 'What was playing in the garden? <p><input type="text" name="Answer"></p>'}],
    //window//
    ["c5-ns", "DashedSentence", {s: "She saw window in the dining room and really liked it."},
    		        "Form", {html: 'What was in the dining room? <p><input type="text" name="Answer"></p>'}],
    ["c5-np", "DashedSentence", {s: "Ben thinks that windows on the side of the house let in a lot of light."},
    		        "Form", {html: 'What does Ben think lets in a lot of light? <p><input type="text" name="Answer"></p>'}],
    ["c5-i",  "DashedSentence", {s: "Many people think a window is a really nice addition to any room."},
    		        "Form", {html: 'What do people think is a nice addition to any room? <p><input type="text" name="Answer"></p>'}],
    ["c5-ds", "DashedSentence", {s: "Look at the window on the front of that building"},
    		        "Form", {html: 'What is on the front of the building? <p><input type="text" name="Answer"></p>'}],
    ["c5-dp", "DashedSentence", {s: "John said that he likes the windows that are very tall."},
    		        "Form", {html: 'What did John say he likes? <p><input type="text" name="Answer"></p>'}],
    //tree//
    ["c6-ns", "DashedSentence", {s: "Do you see tree over there in the park??"},
    		        "Form", {html: 'What is in the park? <p><input type="text" name="Answer"></p>'}],
    ["c6-np", "DashedSentence", {s: "There are trees that have branches the size of cars."},
    		        "Form", {html: 'What has branches the size of cars? <p><input type="text" name="Answer"></p>'}],
    ["c6-i",  "DashedSentence", {s: "There is a tree in the park that everyone carves their name into."},
    		        "Form", {html: 'what does everyone carve their names into? <p><input type="text" name="Answer"></p>'}],
    ["c6-ds", "DashedSentence", {s: "Do you know where the tree is that we brought back from the farm?"},
    		        "Form", {html: 'What did we bring back from the house <p><input type="text" name="Answer"></p>'}],
    ["c6-dp", "DashedSentence", {s: "I would like to plant the trees in the city park this Spring."},
    		        "Form", {html: 'What would I like to plant in the city park? <p><input type="text" name="Answer"></p>'}],
  //Countable [-prototypical]//
    //sponge//
    ["cnp4-ns", "DashedSentence", {s: "Do you have sponge for cleaning?"},
    		          "Form", {html: 'What is for cleaning? <p><input type="text" name="Answer"></p>'}],
    ["cnp4-np", "DashedSentence", {s: "I thought that sponges were used to soak things up."},
    		          "Form", {html: 'What is used to soak things up? <p><input type="text" name="Answer"></p>'}],
    ["cnp4-i",  "DashedSentence", {s: "Mary said she put a sponge in the sink."},
    		          "Form", {html: 'What is in the sink? <p><input type="text" name="Answer"></p>'}],
    ["cnp4-ds", "DashedSentence", {s: "Did you use the sponge to clean the dishes?"},
    		          "Form", {html: 'What is used to clean the dishes? <p><input type="text" name="Answer"></p>'}],
    ["cnp4-dp", "DashedSentence", {s: "I told you that the sponges were under the sink."},
    		          "Form", {html: 'What is under the sink? <p><input type="text" name="Answer"></p>'}],
    //tile//
    ["cnp5-ns", "DashedSentence", {s: "There was tile in the garage but I think we sold it."},
    		          "Form", {html: 'What was in the garage? <p><input type="text" name="Answer"></p>'}],
    ["cnp5-np", "DashedSentence", {s: "I think tiles would look really nice in the master bathroom."},
    		          "Form", {html: 'What would look good in the master bedroom? <p><input type="text" name="Answer"></p>'}],
    ["cnp5-i",  "DashedSentence", {s: "Why is there a tile in the room?"},
    		          "Form", {html: 'What is in the room? <p><input type="text" name="Answer"></p>'}],
    ["cnp5-ds", "DashedSentence", {s: "I thought you would like the tile that I picked out."},
    		          "Form", {html: 'What did I think you would like? <p><input type="text" name="Answer"></p>'}],
    ["cnp5-dp", "DashedSentence", {s: "We saw the tiles that you bought for the entryway."},
    		          "Form", {html: 'What did we see? <p><input type="text" name="Answer"></p>'}],
    //pole//  
    ["cnp6-ns", "DashedSentence", {s: "I wondered if pole was going to look good there."},
    		          "Form", {html: 'What did I wonder might not look good there? <p><input type="text" name="Answer"></p>'}],
    ["cnp6-np", "DashedSentence", {s: "They use poles to hold all of the things together."},
    		          "Form", {html: 'What is used to hold things together? <p><input type="text" name="Answer"></p>'}],
    ["cnp6-i",  "DashedSentence", {s: "Tanner thought that a pole would look good there."},
    		          "Form", {html: 'What did Tanner think would look good there? <p><input type="text" name="Answer"></p>'}],
    ["cnp6-ds", "DashedSentence", {s: "Jeffrey said that the pole was not very attractive."},
    		          "Form", {html: 'What was not very attractive? <p><input type="text" name="Answer"></p>'}],
    ["cnp6-dp", "DashedSentence", {s: "Personally, I think the poles are an eye sore."},
    		          "Form", {html: 'what do I think is an eye sore? <p><input type="text" name="Answer"></p>'}],
  //Flexible//
    //cake//
    ["f4-ns", "DashedSentence", {s: "It was his birthday so he ordered cake for his special dessert."},
    		        "Form", {html: 'What did he order for his special dessert? <p><input type="text" name="Answer"></p>'}],
    ["f4-np", "DashedSentence", {s: "Chelsea wants cakes for the gathering on Sunday."},
    		        "Form", {html: 'What does Chelsea want? <p><input type="text" name="Answer"></p>'}],
    ["f4-i",  "DashedSentence", {s: "When should we order a cake for the party?"},
    		        "Form", {html: 'What are we ordering for the party? <p><input type="text" name="Answer"></p>'}],
    ["f4-ds", "DashedSentence", {s: "They would like the cake made for Friday, not Saturday."},
    		        "Form", {html: 'What did they make for Friday? <p><input type="text" name="Answer"></p>'}],
    ["f4-dp", "DashedSentence", {s: "I need you to get the cakes from the store tomorrow."},
    		        "Form", {html: 'What do you need to get from the store tomorrow? <p><input type="text" name="Answer"></p>'}],
    //rock//
    ["f5-ns", "DashedSentence", {s: "I think there is rock for your garden over there."},
    		        "Form", {html: 'What is in the garden over there? <p><input type="text" name="Answer"></p>'}],
    ["f5-np", "DashedSentence", {s: "Have you seen rocks on this path before today?"},
    		        "Form", {html: 'What is on this path? <p><input type="text" name="Answer"></p>'}],
    ["f5-i",  "DashedSentence", {s: "There was a rock in the middle of the road and the bus almost hit it."},
    		        "Form", {html: 'What was in the middle of the road? <p><input type="text" name="Answer"></p>'}],
    ["f5-ds", "DashedSentence", {s: "I could not believe the rock had been stolen from the school."},
    		        "Form", {html: 'What had been stolen from the school? <p><input type="text" name="Answer"></p>'}],
    ["f5-dp", "DashedSentence", {s: "He said that the rocks were stacked in the garden shed."},
    		        "Form", {html: 'What was stacked in the garden shed? <p><input type="text" name="Answer"></p>'}],
    //paper//
    ["f6-ns", "DashedSentence", {s: "Does he have paper for the novel that he is working on?"},
    		        "Form", {html: 'What does he need for the novel that he is working on? <p><input type="text" name="Answer"></p>'}],
    ["f6-np", "DashedSentence", {s: "I saw papers that need to be recycled on the table in the living room."},
    		        "Form", {html: 'What is on the table and needs to be recycled? <p><input type="text" name="Answer"></p>'}],
    ["f6-i",  "DashedSentence", {s: "He has a paper with important information on it."},
    		        "Form", {html: 'What does he have? <p><input type="text" name="Answer"></p>'}],
    ["f6-ds", "DashedSentence", {s: "Do you know where the kids put the paper that was bought earlier?"},
    		        "Form", {html: 'What did the kids put somewhere? <p><input type="text" name="Answer"></p>'}],
    ["f6-dp", "DashedSentence", {s: "Their father said that the papers had been put in their playroom."},
    		        "Form", {html: 'What had been put in their playroom? <p><input type="text" name="Answer"></p>'}],
];