import React,{ createContext, useState } from 'react'
// import Home from './Home'
// import Bollywood from './Bollywood';
// import Fitness from './Fitness';
// import Hollywood from './Hollywood'
// import Technology from './Technology'
// import Food from './Foodcomp'




export const Store = createContext()
function Storecomp(props) {
  const [data,setdata]= useState([
      
    {
        id : 1,
        heading : "AP Dhillon: First Of A Kind’ Preview Revealed The Unknown Side Of The Singer As A Simple Punjabi Guy",
        image : "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/ap-dhillon-first-of-a-kind-preview-shows-unknown-side-of-music-icon-as-simple-punjabi-guy-001.jpg",
        description : "Punjabi music artiste AP Dhillon, who is known for tracks such as ‘Brown Munde’, ‘Summer High’, ‘Wo Noor’ and several others, is set to feature in a docu-series ‘AP Dhillon: First of a Kind’ the preview of which was unveiled on Tuesday    The preview is over a minute in length and begins with AP Dhillon surrounded by his team as he makes his way to multiple concerts amid a sea of fans.",
        category : "Bollywood"
     
       
    },
    {
        id : 2,
        heading : "Gadar 2 Vs Pathaan: Sunny Deol new movie beats Shah Rukh Khan film at single screens; sells record number of tickets",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/FotoJet-2023-08-09T095753.708.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Sunny Deol film Gadar 2 is roaring as far as advance box office bookings are concerned. We know that Gadar was one of India's greatest ATBB movies, and has immense recall value. Whether it is the truck of Tara Singh, songs like Udd Jaa Kale Kaawan and the iconic Dhaai Kilo Ka Haath dialogue, everything has immense resonance and recall value. Trade experts are sharing the advance bookings of Gadar 2, and it is a pleasant surprise. Now, news has come that it has beaten Pathaan at the single screens of tier B and C cities. This is not unexpected. Sunny Deol has a loyal fan base especially in the",
        category : "Bollywood"
    },
    {
        id : 3,
        heading : "Rocky Aur Rani Kii Prem Kahaani celeb review: Neetu Kapoor, Vicky Kaushal and more label Alia Bhatt, Ranveer Singh starrer as 'entertainer'",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Rocky-Aur-Rani-Kii-Prem-Kahaani-2.png?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Alia Bhatt, Ranveer Singh starrer Rocky Aur Rani Kii Prem Kahaani is releasing two days from today. Karan Johar returns to the director's seat for a visual extravaganza which is a romance drama with stellar supporting actors who are experienced veterans in the field. The upcoming new movie's screening was held last evening which saw a lot of Bollywood celebs attending. And now, they are sharing their review of Alia Bhatt and Ranveer Singh starrer movie. Check out Rocky Aur Rani Kii Prem Kahaani celebs movie",
        category : "Bollywood"
    },

    {
        id : 4,
        heading : "Pushpa 2: Is this why the Allu Arjun starrer is being delayed?",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Pushpa-1.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Pushpa 2: The Rule stands as one of the most highly anticipated upcoming pan-Indian films. Ever since the first look poster of Allu Arjun from the sequel of his blockbuster movie has been released, fans have been eagerly waiting for the movie. Even though we don't know the exact day when Pushpa 2 will come out, it seems like fans will have to wait a bit longer before they can watch it in theaters.",
        category : "Bollywood"
    },
    {
        id : 5,
        heading : "Don 3: Ranveer Singh oozes swag and sophistication in his first look; but Shah Rukh Khan fans beg to differ [Check reactions]",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/FotoJet-2023-08-09T112717.839.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Don 3 has become one of the most trending movies on Twitter in the past two years. Today, Farhan Akhtar showed us the first look of Ranveer Singh as Don 3. We can see the star seated on a table with his back to us. He is in a hoodie. The promo has the iconic dialogue Don Ko Ghayarah Mulkon Ki Police as we see the makers unveil the face of Ranveer Singh as Don. The actor looks smashing in a leather jacket and shades. While Shah Rukh Khan fans are mighty upset with the makers, others feel that Ranveer Singh",
        category : "Bollywood"
    },
    {
        id : 6,
        heading : "Ileana D'cruz celebrates '1 week of being mama'; shares adorable picture of baby Koi",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Ileana-1-1-1.png?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Raid actress Ileana D'Cruz is the latest one to join the motherhood club. The actress gave birth to a baby boy on August 1, 2023. It was after a few days that she announced the arrival of her baby. She shared a picture of the baby and announced the name too. Ileana and her partner have named their little munchkin Koa Phoenix Dolan. Like an excited new mom, Ileana D'cruz is now sharing cute and adorable pictures of the apple of her",
        category : "Bollywood"
    }
    ,
    {
        id : 7,
        heading : "Heart of Stone: Alia Bhatt shares her experience of doing her first action film while being pregnant",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Alia-2.png?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Alia Bhatt's next big release is Heart of Stone. The Rocky Aur Rani Ki Prem Kahaani actress is marking her Hollywood debut with this one. She will be sharing the screen space with Gal Gadot and more in this one. She is definitely quite excited for Heart of Stone as it not only marks her Hollywood debut, she will also be seen as an antagonist in this one. She has performed some dangerous action sequences in the film.",
        category : "Bollywood"
    }
    ,
    {
        id : 8,
        heading : "Karan Kundrra calls Tejasswi Prakash 'aunty' in front of paps; fans call him out for age-shaming, say, 'Baby se Chachi Aunty'",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/FotoJet-2023-08-09T090702.097.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Karan Kundrra and Tejasswi Prakash are one of the most adored couples on social media. And they have strong solo fandoms as well. The two were clicked at the airport as they returned from a short break. There is a video where we can see him addressing her as aunty in front of the paps. This has left her fans upset, and angered many netizens. They feel this kind of age-shaming is unacceptable. There is a difference of nine years between Tejasswi Prakash and Karan Kundrra. Many felt this was disrespectful and the actor should be more conscious about his public behaviour.",
        category : "Bollywood"
    }
    ,
    {
        id : 9,
        heading : "Don 3: Farhan Akhtar makes it official, asks fans to shower the same love they gave to Amitabh Bachchan, Shah Rukh Khan",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/Farhan-Akhtar.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Filmmaker Farhan Akhtar unveiled the announcement video for Don 3 on Tuesday. Ranveer Singh is set to take over the lead role from Shah Rukh Khan in this Don upcoming third instalment. Announcing the same, Farhan Akhtar took to his Instagram and penned a note. He wrote, In 1978, a character created by Salim-Javed and portrayed by Mr. Amitabh Bachchan with effortless elan, captured the imagination of theatergoers across the country. That enigmatic character was Don. In 2006, Don was reimagined and brought to life by Shah Rukh Khan in his own irresistibly charming way. From Don's sardonic wit to his cool but menacing fury, Shah Rukh embodied his persona. As writer & director, I had a great time creating not one but two, Don films with Shah Rukh and both experiences remain very close to my heart",
        category : "Bollywood"
    }
    ,
    {
        id : 10,
        heading : "When Gadar 2 diva Ameesha Patel filed a case against her parents, matter reached court",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/why-Ameesha-patel-fight-with-parents.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Bollywood Actress Ameesha Patel is one of the most popular in the industry. She has starred in many successful films, including Gadar: Ek Prem Katha. However, not many people know that she had a major fight with her parents after the release of Gadar. The fight happened because Ameesha's parents wanted her to quit acting after Gadar became a huge success. They felt that she was too young to be in the limelight and that it would be better for her to focus on her studies",
        category : "Bollywood"
    }
    ,
    {
        id : 11,
        heading : "Bigg Boss OTT 2: Urfi Javed calls Abhishek Malhan and Jiya Shankar's love angle fake, labels the latter as 'thali ka baingan'",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/urfi.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Bigg Boss OTT 2’s grand finale is happening on August 14. Currently, Abhishek Malhan, Pooja Bhatt, Bebika Dhurve, Jiya Shankar, Elvish Yadav and Manisha Rani are inside the house. They are doing their best to attract the audience in this finale week. Yesterday, Avinash Sachdev and Jad Hadid got eliminated from the show. It was a double eviction yesterday. Today, to make the game even more interesting, Bigg Boss OTT season 1 contestant Urfi Javed entered the show as a guest. She entered the show with an interesting task. It is being reported that she will be designing some outfits for the finalists of the show",
        category : "Bollywood"
    }
    ,
    {
        id : 12,
        heading : "Bhola Shankar: Tamannaah Bhatia shot for the film during the toughest phase in her life, reveals Chiranjeevi",
        image : "https://st1.bollywoodlife.com/wp-content/uploads/2023/06/Untitled-design-160.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        description : "Addressing a gathering of celebrities and media personnel, Chiranjeevi showered praise on Tamannaah Bhatia, referring to her as a role model for modern actresses. Chiranjeevi commended her exceptional commitment, diligent efforts, and punctuality, proudly labelling her as an inspiration for the current generation of female leads.",
        category : "Bollywood"
    }
    ,
    {
        id : 13,
        heading : "Shilpa Shetty’s hilarious take on post-leg day fatigue is relatable; here’s how you can combat it",
        image : "https://images.indianexpress.com/2023/08/shilpa-shetty-kundra_200_insta.jpg?w=640",
        description : "Working out can somedays be extremely daunting for the body. As such, many people find leg day extremely strenuous. Imagine not being able to feel your legs post a heavy leg day. Something similar happened with actor Shilpa Shetty Kundra who shared a glimpse from her post-leg day workout session.",
        category : "Fitness"
    }
    ,
    {
        id : 14,
        heading : "Study finds isometric exercises like planks twice as effective in lowering blood pressure; expert weighs in",
        image : "https://images.indianexpress.com/2023/07/plank_1200_getty.jpg?w=640",
        description : "Unlike what has long been considered, a new study claims that isometric exercises that require the body to be held in one position can be twice as effective as moderate-intensity aerobic activity. While the results showed that significant reductions in resting systolic and diastolic blood pressure occurred after all exercise types, it was specifically isometric exercises like planks and wall sits or wall squats that were most effective, reported the study published in the British Journal of Sports Medicine. It examined 270 randomised controlled clinical trials, involving 15,827 participants.",

       
        category : "Fitness"
    }
    ,
    {
        id : 15,
        heading : "Australian man smashes world record of most pushups done in an hour; tips to keep in mind when performing the exercise",
        image : "https://images.indianexpress.com/2023/07/guinness-world-record.jpg?w=640",
        description : "Daniel Scali, a 30-year-old Australian fitness and health enthusiast, has reclaimed the record for the most pushups done in an hour. He successfully completed an astounding 3,249 pushups, breaking the record of 3,206 achieved by fellow Aussie, Lucas Helmke, in November 2022. Scali had previously set the record in April 2022 with 3,182 pushups",
        category : "Fitness"
    },
    {
        id : 16 ,
        heading : "First Lady Jill Biden shares how she finds ‘inner strength’ with exercise",
        image : "https://images.indianexpress.com/2023/08/jill.jpg?w=640",
        description : "Whether it’s spin classes when she’s on the road, biking near the Delaware beach home or jogging on the White House’s driveway, First Lady of the US Jill Biden says that she gains “inner strength” from exercise. Jill’s dedication to her fitness is evident in her diverse workout routine, which she revealed to the Women’s Health magazine recently. An avid fan of barre classes that are a mix of ballet, Pilates and yoga, the first lady’s commitment to her fitness helps her achieve improved flexibility, strength and balance. She also rides the Peloton bike — a high-energy cardio exercise, which allows her to sweat it out from the comfort of her own home or even when she’s on the road due to official visits.",
        category : "Fitness"
       
    },
    {
        id : 17,
        heading : "Why six-pack abs are so hard to achieve – and maintain",
        image : "https://images.indianexpress.com/2023/07/charles-gaudreault-xXofYCc3hqc-unsplash-1.jpg?w=640",
        description:"Many people start going to the gym in the hopes of achieving what has long been seen as the holy grail of health and fitness: six-pack abdominal muscles (abs). But as many people who have tried will attest – including celebrities, such as comedian Eric André – this can be far more challenging than expected. André even equated the experience of trying to achieve a six-pack with being like a full-time job in and of itself. There are many reasons why “getting ripped” is so difficult. It requires sustained hard work and a strict diet – and may also come at the cost of good health.",
        category :"Fitness"

    }
    ,
    {
        id : 18,
        heading : "Virat Kohli believes ‘every day should be a leg day’",
        image : "https://images.indianexpress.com/2023/07/virat-kohli-fitness_insta.jpg?w=640",
        description: "In the two pictures shared, he can be seen performing a leg press as well as working on his calf muscles with the help of a coach. Every day should be a leg day. 8 years and counting, said Kohli, referring to his eight-year-long journey of being consistent in the gym that has enabled him to stay on track with his health and fitness",
        category :"Fitness"
    }
    ,
    {
        id : 19,
        heading : "How to start running today: a beginner’s guide",
        image : "https://images.indianexpress.com/2023/06/running_200_getty-sunrise-1.jpg?w=640",
        description : "You must have heard from many people about the benefits of including running into your routine. From feeling more energised to losing weight and even cardiovascular activity, running boasts off numerous benefits that one can experience when they are regular with it. As such, if you have not been feeling too motivated to try out running, here’s a basic beginner’s guide that can help you make the change today.",
        category :"Fitness"

    }
    ,
    {
        id :20 ,
        heading : "Should you practice yoga only in the mornings?",
        image : "https://images.indianexpress.com/2023/06/yoga_200_pixabay.jpg?w=640",
        description : "Practising yoga or any form of exercise in the morning, particularly in the early hours, can be highly beneficial as it sets the tone for your day. Starting your day with exercise can provide you with increased energy and help you perform a good workout. While many people find that practising yoga in the morning helps them start their day with a sense of calmness and energy, it is not the only time that yoga can be beneficial. As such, yoga practitioner Swati opened up about the ideal time to practise yoga The ideal time to practice yoga is during the Sandhya Kalas. Twenty minutes before and after sunrise, noon and sunset, this is known as Sandhya Kala period or the transition period, said Swati",
        category :"Fitness"

    }
    ,
    {
        id : 21,
        heading : "Is it safe for children to deadlift?",
        image : "https://images.indianexpress.com/2023/06/deadlift-children_1200_freepik.jpg?w=640",
       description: "An eight-year-old’s video of weightlifting like a pro went viral recently. In the videos, Arshia Goswami from Haryana’s Panchkula can be seen deadlifting 60kgs. In 2021, she made it to the India Book of Records for lifting 45 kgs. As such, a natural question to ask is whether it is safe for children to do deadlifts or lift any kind of weight. Here’s what experts told us.",
        category :"Fitness"

    }
    ,
    {
        id : 22,
        heading : "Can vitamin D from the sun help you ‘shred faster’, as Hrithik Roshan says?",
        image : "https://images.indianexpress.com/2023/06/hrithik3.jpg?w=640",
        description : "Hrithik Roshan is known for his physique and leaves no stone unturned to keep his fitness going. In an Instagram post, where he is seen working out with his washboard abs on display, the 49-year-old actor wrote that soaking in the sun helps one lose fat fast.When you need to shred fast, nothing works better than vitamin D’hoop! Soak it in before the yellow turns blue",
        category :"Fitness"

    }
    ,
    {
        id : 23,
        heading : "Keep the breasts firm and relieve stiff back muscles with these yoga asanas",
        image : "https://images.indianexpress.com/2023/06/yoga-2.jpg?w=640",
        description : "If you have a stiff upper body and saggy breasts, worry not as there are certain yoga asanas that can help you get rid of them. Apprising us about the same, Anshuka Parwani, a celebrity yoga expert, took to Instagram and wrote, It is very common for the breasts to droop as you get older. But there are certain factors like bad posture, and lack of movement, that can lead to saggy breasts from a younger age. Here are some movements that will activate and tone your chest and back muscles, which will help to keep the breasts firm and help relieve stiff back muscles. She added that a hunched or bent back, can cause the breasts to hang by their own weight, aggravating the sagging process. “But, when your posture is good, you are indirectly putting less strain on your back and breasts. Always be conscious of your posture and make it a habit to practice these daily to see the difference,” she further wrote.",
        category :"Fitness"

    }
    ,
    {
        id : 24,
        heading : "Posture Perfect: Are you standing the right way?",
        image : "https://images.indianexpress.com/2015/11/posture2a_759.jpg",
        description : "So, what is a good posture?  A good posture means your bones are properly aligned and your muscles, joints and ligaments can work as nature intended. It means your vital organs are in the right position and can function at peak efficiency. A good posture helps contribute to the normal functioning of the nervous system.",
       
        category :"Fitness"

    }
    ,
    {
        id : 25,
        heading : "Chandrayaan-3 will land even if ‘everything fails, all sensors fail, nothing works’: ISRO chief",
        image : "https://images.indianexpress.com/2023/08/Chandrayaan-3-mission-view-20230808.jpg?w=640",
        description : "ISRO chairman S.Somnath on Tuesday said that the Chandrayaan-3 spacecraft is set to make a soft landing on the Moon on August 23.Somanath made the comments while speaking during a talk on Chandrayaan-3 hosted by the non-profit organisation Disha Bharat. “If everything fails, if all the sensors fail, nothing works, still it (Vikram) will make a landing. That’s how it has been designed — provided that the propulsion system works well. We have also made sure that if two of the engines (in Vikram) don’t work this time also, it will still be able to land,” said the chairman during the event according to news agency PTI.The Chandrayaan-3 mission took aff atop an LVM-3 rocket from the Satish Dhawan Space Centre in Sriharikota at 2.35 PM IST on July 14, 2023. After takeoff and separation from the launch module, the Chandrayaan-3 spacecraft executed multiple manoeuvres climbing to a higher Earth orbit each time before finally injecting itself into a “translunar” orbit on August 5.",
        category :"Technology"

    }

    ,
    {
        id :26 ,
        heading : "Ocean heatwaves, ice loss, other extreme events ‘virtually certain’ in Antarctica",
        image : "https://images.indianexpress.com/2023/08/Antarctica-ice-20230808.jpg?w=640",
        description : "Raging wildfires, deadly heatwaves, floods and more happened this year across the world, signifying the impact of climate change. A new study finds that extreme events in Antarctica, including ocean heatwaves and ice loss will almost certainly become more common and more severe.The study published in the journal Frontiers in Environmental Science reviews evidence of extreme events in Antarctica and the Southern Ocean, including weather, sea ice, ocean temperatures, glacier and ice shelf systems, and biodiversity. It found that the fragile environments in Antarctica will be put through “considerable stress” and damage in the coming years",
        category :"Technology"

    },
    {
        id :27 ,
        heading : "How to enable Chrome’s dark mode for all websites on iPhone, Android and PC",
        image : "https://images.indianexpress.com/2023/07/Google-Chrome-Express-Photo-1.jpg?w=640",
        description : "Google Chrome is one of the most used apps on Android, iOS, and Windows. If you are like the majority of people who browse the internet for hours on Chrome, the bright white light might cause eye fatigue and irritation.While Chrome on all platforms comes with support for dark mode, some websites do not support it. If you are looking for a way to enable dark mode on iPhones, Android phones and Windows.",
        category :"Technology"

    },
    {
        id : 28,
        heading : "Is your PC slow? Try these tricks to regain its speed and power",
        image : "https://images.indianexpress.com/2023/07/make-your-old-pc-fast.jpg?w=640",
        description : "As components get old, most electronic gadgets, including PCs, will start to show signs of ageing. This is why even high-end computers purchased just a few years ago may struggle with basic tasks like web browsing, video streaming, and content creation.In addition to ageing hardware, there will also be various underlying issues that can slow down a PC. These include slower storage devices, limited memory, and an excess amount of apps and services running in the background with startup permission.",

        category :"Technology"

    },
    {
        id :29 ,
        heading : "Apple reportedly working on iPad Mini 7, will likely feature upgraded chipset",
        image : "https://images.indianexpress.com/2023/08/iPad-Mini-Express-photo.jpg?w=640",
        description : "Apple is reportedly gearing up to launch the 7th generation of iPad Mini sometime later this year. The upcoming tablet might sport an upgraded chipset, most likely the A16 Bionic or the much-rumoured A17 Bionic, which will power the iPhone 15 series.",
        category :"Technology"

    },
    {
        id :30 ,
        heading : "OnePlus rumoured to ditch ‘V Fold’ in favour of ‘Open’ for its upcoming foldable",
        image : "https://images.indianexpress.com/2023/07/OnePlus-Open-Foldable.jpg?w=640",
        description : "With manufacturers like Oppo, Google, Samsung, Motorola and others upping the ante with their latest foldables, it looks like the form factor might finally become mainstream. Earlier this year at the Mobile World Congress (MWC) 2023, OnePlus also teased its upcoming foldable with the company already trademarking the name ‘OnePlus V Fold’ and ‘OnePlus V Flip’ in China.",
        category :"Technology"

    },
    {
        id : 31 ,
        heading : "Gboard beta brings split keyboard interface to Android tablets",
        image : "https://images.indianexpress.com/2023/05/Gboard.jpg?w=640",
        description : "Just days after Google announced the Pixel Tablet at its annual developer conference, the tech giant seems to be rolling out split keyboard on Android-powered tablets. Last year, Gboard brought the functionality to foldable devices like the Galaxy Fold series and Microsoft Surface Duo,To give you a quick recap, the split keyboard feature divides Gboard into two halves with an equal number of keys on both the left and right sides. The option automatically enables the ‘Split layout to include duplicated keys’, which duplicates some keys on both sides of the keyboard. If you turn it off, the number of keys on the left side will be higher compared to that on the right. It also includes a toolbar tile that lets users quickly switch between the standard and split keyboard interface.",
        category :"Technology"

    },
    {
        id :32 ,
        heading : "Reliance launches JioBook 4G for Rs 16,499",
        image : "https://images.indianexpress.com/2023/07/JioBook.jpg?w=640",
        description : "Reliance has announced JioBook, a new laptop powered by the company’s JioOS. The 4G-enabled device is aimed at students and offers access to educational content via the JioTV app,JioBook sports a matte finish and weighs only 990 grams. It is powered by the MediaTek MT 8788 processor and features an 11.6-inch anti-glare HD screen. The laptop has 4GB RAM and 64GB storage, which can be expanded up to 256GB using the microSD card slot.",
        category :"Technology"

    },
    {
        id :33 ,
        heading : "Asus Vivobook 14 Touch launched in India: Check price, features",
        image : "https://images.indianexpress.com/2022/09/Asus-VivoBook-14-Touch.jpg?w=640",
        description : "Asus has launched the new Vivobook 14 Touch in India, a 14-inch thin-and-light system that comes with a touchscreen display panel. The Notebook is powered by Intel Core 12th Gen processors and will be available on Flipkart.",
        category :"Technology"

    },
    {
        id :34 ,
        heading : "WhatsApp introduces instant video messages: Here’s how to use them",
        image : "https://images.indianexpress.com/2023/07/WhatsApp-Video-Messaging-featured.jpg?w=640",
        description : "Meta has launched a new WhatsApp feature that allows users to send and receive short video messages in their chats, adding more emotion and personality to the messaging experience,Instant video messages are similar to voice messages, but with video. The recording process is also similar to voice messages. Users can tap the icon to the right of the text field to switch to video mode and share up to 60 seconds of video with their contacts. They can also swipe up to lock and record the video hands-free,Likely to distinguish from regular videos, video messages show up in a circular form in chats. They play automatically on mute but users can tap on them to hear the sound.",
        category :"Technology"

    },
    {
        id :35 ,
        heading : "A little bit chaotic: Russell Brand recalls marriage days with Katy Perry ",
        image : "https://www.hindustantimes.com/ht-img/img/2023/08/08/550x309/Russell_Brand_and_Katy_perry_1691501474390_1691501503179.jpg",
        description : "Russell Brand has revisited his marriage days with popular singer Katy Perry. In an interaction on “Running Wild with Bear Grylls: The Challenge” on Sunday, Brand opened up about his short-lived marriage with Perry and highlighted the fame, disconnect and chaos he felt during that phase. Brand also called the I Kissed a girl singer an amazing person.",
        category :"Hollywood"

    },
    {
        id :36 ,
        heading : "Mission Impossible: Dead Reckoning Part One nears $500 mn mark at the global box office, Oppenheimer edges past",
        image : "https://www.hindustantimes.com/ht-img/img/2023/08/07/550x309/oppen_mi_1691413103428_1691413122807.jpg",
        description : "Greta Gerwig's Barbie isn't the only film breaking records at the global box office. The Margot Robbie and Ryan Gosling-starrer has made over $1 billion at the global box office, allowing Greta to become the first woman director to achieve that feat. Now, as per reports in Collider and CNN, Mission: Impossible - Dead Reckoning Part One is nearing the $500 million mark at the worldwide box office, whereas Christopher Nolan's Oppenheimer has already surpassed it. (Also Read: Cillian Murphy confirms Oppenheimer has no deleted scenes)",
        category :"Hollywood"

    },
    {
        id :37,
        heading : "Red, White and Royal Blue director Matthew López on that coming out scene: ‘It might be more for the parents’",
        image : "https://www.hindustantimes.com/ht-img/img/2023/08/06/550x309/rwrb_1691333325649_1691333326035.png",
        description : "Taylor Zakhar Perez and Nicholas Galitzine with director Matthew López on the set of Red, White and Royal Blue,The much-awaited adaptation of Red, White and Royal Blue, Casey McQuiston's bestselling LGBTQ+ romance, is all set to premiere on Prime Video on August 11. Taylor Zakhar Perez and Nicholas Galitzine play Alex Claremont-Diaz, the son of the president of the United States, and Prince Henry of Wales respectively, who end up tripping over a giant cake together first and then come around to fall in love with each other. (Also read: Heartstopper season 2 review: Queer teen love story has a lot to love, but lacks bite)",
        category :"Hollywood"

    },
    {
        id :38 ,
        heading : "Marc Maron reviews Barbie, says men who have a problem with the film are ‘insecure babies’ ",
        image : "https://www.hindustantimes.com/ht-img/img/2023/08/04/550x309/barbie_1691155285780_1691155286208.jpg",
        description : "Marc Maron has reviewed Greta Gerwig's Barbie,Greta Gerwig's Barbie released on July 21 to rave reviews and massive box office numbers worldwide. Now, comedian and podcaster Marc Maron has reviewed the film and hailed it as a 'masterpiece' while also saying that the men who seemed to have issues with it are 'insecure babies.' (Also read: Barbenheimer box office: Oppenheimer collects ₹92 crore in India, Barbie stands at ₹35 crore after 10 days in theatres)",
        category :"Hollywood"

    },
    {
        id : 39 ,
        heading : "Tory Lanez Sentenced To 10 Years In Prison In Megan Thee Stallion Shooting Incident ",
        image : "https://hollywoodlife.com/pics/tory-lanez-photos/#!3/tory-lanez-at-99-jamz-radio-station-fort-lauderdale-usa-26-apr-2018",
        description : "After being found guilty of assault in December of 2022, rapper Tory Lanez was sentenced in the infamous 2020 shooting that left superstar Megan Thee Stallion‘s foot injured. Tory, 31, was sentenced on August 8 to 10 years in prison for the shooting injury to the fellow rapper, per Rolling Stone.  According to legal reporter Meghann Cuniff via Twitter, Tory spoke during the sentencing, saying that Megan is someone I still care for dearly to this day.",
        category :"Hollywood"

    },
    {
        id : 40,
        heading : "AGT’ Recap: The Judges Surprise One Act With The Last Golden Buzzer Of Season 18 ",
        image : "https://hollywoodlife.com/pics/americas-got-talent-season-18-photos/#!1/americas-got-talent-season-18-12",
        description : "The final round of the America’s Got Talent season 18 auditions begins with a man named Wesley singing and playing the piano. Howie Mandel quickly presses his red X. Suddenly, an audience member gets up and yells to give Wesley another chance. Turns out, she’s part of the act,More people begin to pop up in the audience. They’re all a part of the Improv Everywhere group. The crew even has a marching band and UCLA choir incorporated into their performance. The whole act is quite the spectacle. The judges are pretty torn on this act. Simon Cowell and Heidi Klum are fans, but Sofia Vergara and Howie are not. Ultimately, it comes down to Howie, and he doesn’t give the group the “yes” they need.",
        category :"Hollywood"

    },
    {
        id : 41 ,
        heading : "Iggy Azalea Defends Writing Letter To Keep Tory Lanez Out Of Prison For Shooting Megan Thee Stallon ",
        image : "http://hollywoodlife.com/wp-content/uploads/2016/07/iggy-azalea-1-1.jpg?w=680",
        description : "Lanez’s case relating to his shooting of Megan Thee Stallion on Twitter on Monday, August 7. The singer, 33, clarified that she wrote the letter to share her experience with Tory, 31, and she wasn’t trying to “‘support’ anyone” in the trial against Megan, 28. Iggy also called for “rehabilitative” punishment for Tory, rather than prison time.",
        category :"Hollywood"

    },
    {
        id :42 ,
        heading : "Shawn Mendes & Camila Cabello: See The On-Again, Off-Again Couple’s Cutest Photos Together ",
        image : "http://hollywoodlife.com/wp-content/uploads/2019/06/shawn-mendes-camilla-cabello-5.jpg?w=680",
        description : "Shawn Mendes and Camila Cabello both got their start in the music industry around the same time, and they’ve formed a long lasting friendship. Fans began speculating that a romance could be brewing between the two when they collaborated on ‘I Know What You Did Last Summer’ in 2015. Although the pair continuously insisted they were just friends, fans BEGGED them to get together, but it never happened. However, they remained close friends who always stuck by each other through the ups and downs of the crazy music industry,In 2019, they finally answered fans’ prayers by teaming up for another collaboration on the song ‘Senorita.’ To go with the track, they also filmed a SUPER sexy music video, in which they packed on the PDA. Ever since, they’ve been in a hot and heavy relationship. Keep clicking through the gallery to check out more photos of Camila and Shawn together.",
        category :"Hollywood"

    },
    {
        id : 43,
        heading : "Ciara & Russell Wilson’s Cutest Family Photos ",
        image : "http://hollywoodlife.com/wp-content/uploads/2019/07/ciara-russell-willams-fam-pics-3.jpg?w=680",
        description : "Ciara and Russell Wilson have one ADORABLE family & now it’s growing because Ciara just announced she’s pregnant with her fourth child! Before Ciara was with Russell, she was engaged to the rapper, Future, and they had a son, Future Jr., together. Future Jr. was born in May 2014, and just two months later, Ciara and Future called off their engagement. Ciara and Russell began dating in 2015 and were engaged by March 2016. They got married just four months later, and their daughter, Sienna, was born in April 2017. The foursome love attending public events together, and Sienna and Future Jr. have already been photographed on a number of red carpet. How cute does the family look at the 2019 Nickelodeon Kids’ Choice Sports Awards in this photo!? Future proved he already knows how to work the camera by making a goofy face, while Sienna looked too cute in her tutu skirt. They later became a family of five when Ciara gave birth to the couple’s son Win Wilson in July 2020. Keep clicking through the gallery for more adorable content like this!",
        category :"Hollywood"

    },
    {
        id : 44 ,
        heading : " Zendaya Opens Up About Steamy Sex Scenes Full Of ‘Tension’ In Her New Movie",
        image : "https://hollywoodlife.com/wp-content/uploads/2023/08/zendaya-challengers-tension-sex-scene-ftr.jpg?resize=768%2C432",
        description : "Zendaya opened up about how much sex there’s going to be in her upcoming film Challengers. In a new interview with Empire, the 26-year-old Emmy winner said things get very steamy in Luca Guadagnino‘s tennis film that explores a love triangle between herself, Mike Faist, 31, and Josh O’Connor, 33,“What Luca’s really good at is finding sensuality and desire,” Zendaya said in the August 1 interview. “There’s so much in just glances. The tension builds. Not having the release is a good thing sometimes,” she added.",
        category :"Hollywood"

    },
    {
        id : 45 ,
        heading : "Hottest Celebrity Pics This Week Of July 31 – August 6: Gigi Hadid & More",
        image : "https://hollywoodlife.com/wp-content/uploads/2023/07/Sisters-Gigi-Alana-and-Marielle-Hadid-.jpg?w=680",
        description : "After scorching temperatures, it seems like we’re wrapping up the ‘dog days of Summer,’ and starting to slide into cooler temperatures and longer nights. But, before the sun sets on the season, some of your favorite celebs are going to party until the break of dawn. After all, August has just arrived and there are still a few more weeks left of the season, and some of your favorite celebs – like Gigi, Alana, and Marielle Hadid, seen here – are making the most of it. The three sisters came together for Alana’s 40th Birthday Bash, sponsored by Martini & Rossi. Courtesy Martini & Rossi.Throughout the evening, VIP guests at Alana’s party mingled, enjoyed Greek-inspired bites that transported them to the Mediterranean, and danced the night away like they were on Mt. Olympus, all while enjoying cocktails by Martini & Rossi. A crowd favorite was the Martini & Rossi Fiero & To-Nyx Spritz – a light summer sip simply made with 50% Martini & Rossi Fiero and 50% tonic water and topped with a dash of Martini & Rossi Prosecco. Alana channeled her inner Greek goddess in a shiny, draping golden BRONX AND BRONCO gown and sipped and laughed with fellow celeb friends.",
        category :"Hollywood"

    },
    {
        id :46 ,
        heading : "Behind the Scenes: Watch How Kitchen King Masala Is Made",
        image : "https://c.ndtvimg.com/2023-07/le9p17r_garam-masala_625x300_26_July_23.jpg",
        description : "Behind the Scenes: Watch How Kitchen King Masala Is MadeWithin the heart of every Indian kitchen lies an array of spices, both powdered and whole, that give a distinctive charm to every dish.PayalUpdated: August 08, 2023 17:25 ISTRead Time:1 min.Behind the Scenes: Watch How Kitchen King Masala Is Made.Kitchen King Masala embarks on its mission to enhance meals.HighlightsKitchen king masala is used in various dishes.A touch of dehydrated onion and garlic adds depth.As these ingredients mingle, they create a base for culinary delight.Indian cuisine has earned global acclaim for its irresistible flavours. Within the heart of every Indian kitchen lies an array of spices, both powdered and whole, that give a distinctive charm to every dish. Among these, 'Kitchen King Masala' stands tall. Recently, we stumbled upon a video revealing the process behind the creation of this masala powder. Captured and shared by blogger, Amar Sirohi, fondly known as 'foodie_incarnate,' the video takes us on a journey to the vibrant city of Amritsar, Punjab. The video, which garnered 67k views, encapsulates the essence of the spice-making tradition.",
        category :"Food"

    },
    {
        id :47 ,
        heading : "Viral Tweet Claims That Avocado Is Cheaper Than Tomato, Internet In Shock ",
        image : "https://c.ndtvimg.com/2023-03/fq7h12bo_avocado1_625x300_06_March_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        description : "Viral Tweet Claims That Avocado Is Cheaper Than Tomato, Internet In ShockGoing by the post, an avocado, weighing around 140-200 grams, stood at a price of Rs 59 whereas tomatoes were far more expensive.Edited by Aditi AhujaUpdated: August 06, 2023 17:41 ISTRead Time:2 min Viral Tweet Claims That Avocado Is Cheaper Than Tomato, Internet In Shock Tomato prices have been skyrocketing in the recent past.Photo: iStock (representational)HighlightsRecently, avocado has proved to be less expensive than tomatoThis is after the ongoing price hike of tomatoes in IndiaThe tweet about the comparison went viral You must be living under a rock, if you haven't heard about the surge in the price of tomatoes. The cost of one kilogram of tomatoes, in certain regions of the county, stands at Rs 300. The astonishing jump from the previous rate of just 20 rupees per kilogram has taken everyone by surprise. Even eateries are seeking more budget-friendly alternatives like tinned sauces and purees. Now, a woman has compared the cost between tomatoes and avocados. As per her tweet, the price of tomatoes is more than that of avocados",
        category :"Food"

    },
    {
        id : 48,
        heading : " Osaka Restaurant Breaks World Record For Most Expensive Sushi, Guess The Price",
        image : "https://c.ndtvimg.com/2023-08/vbll2ibo_sushi-platter_625x300_09_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        description : "Sushi has innumerable fans around the world. This traditional Japanese delicacy has many lip-smacking varieties we can enjoy. Delicious and good quality sushi require premium ingredients - hence it is no surprise that it's often found on the pricier side of menus. And a restaurant in Japan just took this to a whole new level by breaking the Guinness World Record (GWR) for the most expensive sushi. The exact dish that is associated with the achievement is called the Kiwami Omakase course, featuring 20 pieces of sushi. Can you guess the price of it? Find out below!",
        category :"Food"

    },{
        id :49 ,
        heading : " Whole Wheat Pasta in Mushroom Sauce",
        image : "https://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg",
        description : "A stunning whole wheat pasta laced with a creamy mushroom sauce ready in just 25 minutes! Made with whole wheat pasta, this delicious dish is a healthy and guilt-free too! ",
        category :"Food"

    },{
        id : 50,
        heading : "Southern Style Okra recipe here..  ",
        image : "https://i.ndtvimg.com/i/2015-04/bhindi_625x350_51429706972.jpg",
        description : "This recipe will change the way you see lady fingers. Enhanced with Southern flavours of mustard seeds, tamarind, jaggery and coconut, a simple recipe that will leave you delighted. Pair them with roti or rice for best experience. ",
        category :"Food"

    },{
        id : 51,
        heading : " Aloo Tikki ",
        image : "https://c.ndtvimg.com/2023-02/604r3foo_aloo-tikki_625x300_19_February_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        description : "Indians and their love for aloo tikki need no introduction. The feeling of biting into a crispy tikki topped with yoghurt and sweet and tangy chutneys is indescribable. While we enjoy eating this classic street food all year round, it becomes even more popular as soon as the monsoon showers kick in. Order some now and indulge in its goodness! ",
        category :"Food"

    },{
        id : 52,
        heading : " Dal Kachori ",
        image : "https://c.ndtvimg.com/2023-05/pcbst8eo_kachori-3_625x300_04_May_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        description : " Another much-loved snack during the monsoon is kachori. This crispy delight is stuffed with a spicy and flavourful moong dal filling and deep-fried to perfection. You can relish it as is or even with some sweet chutney to balance out the spicy flavours; the choice is all yours. Indulge in this classic Rajasthani snack and enjoy the rain with pure indulgence.",
        category :"Food"

    },{
        id :53 ,
        heading : " Chicken Recipes That Taste Even Better In Winter",
        image : "https://c.ndtvimg.com/2020-12/akmaiiq_chicken-curry_625x300_21_December_20.jpg",
        description : " A  good source of lean protein, chicken is one food that unites both dieters and non-dieters. Did you know eating chicken could give fulfil your daily protein requirement to a great extent? Protein is helpful in building muscle, check weight-gain and is good for your skin, hair and nails too.While we can savour chicken at any time of the day, there are some preparations that taste even more wonderful during winters, and some that are specially made during this chilly weather. We have compiled some of our favourites in this list, have a look.",
        category :"Food"

    },{
        id :54 ,
        heading : " Chicken And Mushroom Lasagna ",
        image : "https://c.ndtvimg.com/2019-06/24n5qlto_lasagna-with-garlic-bread_625x300_20_June_19.jpg",
        description : "Juicy bits of chicken with chunky mushrooms all layered in between cheesy pasta sheets, with choice herbs and tangy sauces. A comforting delight inside-out! Click here for recipe. ",
        category :"Food"

    },{
        id :55,
        heading : " Chicken Popcorn",
        image : "https://c.ndtvimg.com/2020-10/5dfenv68_chicken-popcorn_625x300_07_October_20.jpg",
        description : "About Chicken Popcorn Recipe: Bite-sized chicken popcorns are just perfect as appetizers for a dinner party. Full of spices, chillies and fried to perfection. Chicken popcorn is the finger snack that you can easily prepare at home for kids or for a party. ",
        category :"Food"

    },{
        id :56 ,
        heading : "Superfoods For Keeping Women Healthy And Strong ",
        image : "https://c.ndtvimg.com/2020-01/p6ds8bro_superfoods_625x300_20_January_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        description : " A modern-day- woman juggles between multiple roles- assuming positions of responsibility at the workplace and at the same time looking after household chores. Hence, it is not surprising that their daily diet and nutrient consumption cannot keep up with this hectic lifestyle. As per an NFHS study (2015-16), one out of every four women of reproductive age in India are malnourished, with a BMI (Body Mass Index) less than 18.5 kg/m. This isn't just restricted to urban women; this rate of undernutrition prevalent is higher among rural women, about 40.6% of them compared to their urban counterparts (25%).",
        category :"Food"

    },{
        id :57 ,
        heading : ".Beetroot juice  ",
        image : "https://c.ndtvimg.com/2020-01/ssf38d5g_blood_625x300_17_January_20.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        description : "Beetroot is an excellent source of fibre. It streamlines the digestive system keeping the gut healthy. Beetroot and its juice are associated with many benefits like improved blood flow, lower blood pressure and better exercise performance. These benefits may be a result of the presence of Inorganic nitrates in the beets. Beetroots and their leaves, referred to as beet greens, can also be consumed as a superfood. ",
        category :"Food"

    },{
        id :58 ,
        heading : "Lemon + Tea = Trouble? The Bitter Reality Of Lemon Tea On Our Health",
        image : "https://c.ndtvimg.com/2023-08/f0294s1g_tea_625x300_08_August_23.jpg?im=FeatureCrop,algorithm=cascade,width=620,height=350",
        description : "Lemon + Tea = Trouble? The Bitter Reality Of Lemon Tea On Our HealthBefore you reach for your next cup of lemon tea, take a moment to peruse this article and jot down some notes for yourself. Read on.Somdatta SahaUpdated: August 09, 2023 15:37 ISTRead Time:3 min Lemon + Tea = Trouble? The Bitter Reality Of Lemon Tea On Our Health Lemon tea may be hazardous for healthPhoto Credit: iStockHighlightsLemon is loaded with antioxidants and so is tea.But together, they may increase the acid level in your body.This may lead to several health troubles.Ask any chai lover, and you'll discover that everyone has their own preferences when it comes to their brew. Some prefer it black, while others enjoy the bold flavours of kadak masala chai, complete with milk, spices, and a generous amount of sugar. Then there's a group of individuals who take pleasure in adding a twist of lemon to their black or green tea. Yes, we're referring to the ever-popular lemon tea. While this beverage is widely adored in India and beyond, it might come as a surprise to learn that lemon tea could potentially pose hazards to your health. That's right. So, before you reach for your next cup of lemon tea, take a moment to peruse this article and jot down some notes for yourself. Read on. ",
        category :"Food"

    },{
        id :59,
        heading : " Indori Sev Paratha ",
        image : "https://c.ndtvimg.com/2023-06/2s2j7dqo_aloo-palak-paratha_625x300_06_June_23.jpg",
        description : " Sev Paratha is an Indian flatbread stuffed with sev/bhujia mix. This is very tasty paratha recipe from Indore. Just like Indori Poha recipe, this sev ka paratha makes a delicious breakfast, brunch, or a lunchbox recipe.Simple nylon sev are seasoned with onion, chili, green coriander, and few spices. Stuffed in whole wheat flour dough balls and cook on a griddle, this sev paratha is a great way to use the leftover sev or bhujiya namkeen. Here is how to make it.",
        category :"Food"

    },{
        id :60 ,
        heading : " Khaman Dhokla",
        image : "https://www.cookwithmanali.com/wp-content/uploads/2023/02/Khaman-Dhokla-676x1024.jpg",
        description : "Khaman Dhokla is a soft, fluffy, savory steamed cake, made from gram flour and spiced with green chili, ginger, and spices. This instant version of the traditional Khaman is also known as Nylon Khaman and is vegan, protein-rich, and delicious! This chickpea flour cake from Gujarati cuisine is lightly sweet, tangy, and perfect for breakfast or a snack with a side of spicy green chutney and tangy tamarind chutney. ",
        category :"Food"

    }
    



 ])

 
  return (
    <div>
        <Store.Provider value={[data,setdata]}>
        {/*  <Home/>
        <Bollywood/>
        <Fitness/>
        <Hollywood/>
        <Technology/>
        <Food/> */ }
        {props.children}
        </Store.Provider>
    </div>
  )
}

export default Storecomp;