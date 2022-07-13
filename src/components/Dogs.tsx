import React from 'react'
import { useNavigate } from 'react-router-dom'
import PanelBody from './PanelBody';
import '../scss/dogs.scss';

function Dogs() {
  let navigate = useNavigate();
  return (
    <main>
      <PanelBody title="15 Amazing Dog Facts">
        <p className="sub-title">
          Our dogs have always been our most loyal companions, so it's only natural that we want to know as much as we can about them. Keep reading for our top 15 dog facts that you won't believe!
        </p>
        <div className="fact-article">
          <h2>1. Dogs noses are wet to help absorb scent chemicals</h2>
          <p>This amazing dog fact might answer a long-standing question that dog owners have. Why are dogs noses wet? Vetstreet says that the answer is that dog’s noses are wet to help them absorb scent chemicals! Their nose secretes a special mucus that helps to absorb these chemicals, and then they lick their noses to sample them, helping them understand what the smell is.</p>
        </div>
        <div className="fact-article">
          <h2>2. Newfoundlands are amazing lifeguards</h2>
          <p>Newfoundland dogs are the ultimate doggy lifeguards, because they have water resistant coats and webbed feet. They were originally bred as fisherman’s helpers and to rescue people from drowning.</p>
          <p>Some owners have even reported that their Newfoundland tries to “rescue” them when they’re swimming!</p>
        </div>
        <div className="fact-article">
          <h2>3. The Beatles song ‘A Day in the Life’ has a frequency only dogs can hear</h2>
          <p>In an interview in 2013, Paul McCartney said that he added a frequency only dogs can hear to the end of the Beatles song ‘A Day in the Life’. So watch your dog when you play the song! How’s that for an amazing dog fact?</p>
        </div>
        <div className="fact-article">
          <h2>4. Three dogs survived the Titanic sinking</h2>
          <p>Did you know that three dogs survived the sinking of the Titanic? Vetstreet states that the dogs were in first class and included a Pomeranian puppy - which her owner wrapped in a blanket to escape with, and everyone thought she was carrying a baby. Another Pomeranian and a Pekingese were also rescued. Move over Rose and Jack!</p>
        </div>
        <div className="fact-article">
          <h2>5. A Bloodhound’s sense of smell can be used as evidence in court</h2>
          <p>According to PBS, a Bloodhound’s sense of smell is so spot on that it can be admitted as evidence in a court of law. Now if you thought that was an incredible dog fact, prepare to have your mind blown.</p>
          <p>Bloodhounds can also follow tracks that are over 300 hours old and can stay on a trail for over 130 miles!</p>
        </div>
        <div className="fact-article">
          <h2>6. The tallest dog in the world is 44 inches tall</h2>
          <p>The tallest dog in the world ever was a Great Dane named Zeus! Measured at 44 inches tall on October 4th 2011, he’s the current Guinness World Record holder.</p>
        </div>
        <div className="fact-article">
          <h2>7. Basenji dogs don’t bark, they yodel</h2>
          <p>If you thought all dogs barked, then prepare yourself for this dog fact. The Basenji dog doesn’t tend to bark, instead they are known to yodel, whine or scream.</p>
        </div>
        <div className="fact-article">
          <h2>8. A Greyhound could beat a Cheetah in a long distance race</h2>
          <p>A Greyhound would actually beat a Cheetah in a long distance race! According to Psychology Today, Greyhounds are excellent long distance runners and can keep a speed of 35mph for up to 7 miles.</p>
          <p>Where the Cheetah is incredibly fast it can only keep its speed for around 200 -300 yards, so they may have the running start but it would soon be surpassed by a Greyhound!</p>
        </div>
        <div className="fact-article">
          <h2>9. A blind man and his guide dog hiked the Appalachian Trail</h2>
          <p>According to the Washington Post, for eight months during 1990 a blind man named Bill Irwin hiked the Appalachian Trail with his guide dog, Orient helping him along the way. Dogs truly are man’s best friend.</p>
        </div>
        <div className="fact-article">
          <h2>10. The Ewoks in Star Wars were based on a dog</h2>
          <p>If you’re a Star Wars fan you’ll love this amazing dog fact. The Los Angeles Times claims that George Lucas modelled the Ewoks after his family dog!</p>
        </div>
        <div className="fact-article">
          <h2>11. 30% of Dalmatians are deaf in one ear</h2>
          <p>UFAW states that on average around 30% of Dalmatians are deaf in one ear and 5% are deaf in both. This is due to something called the extreme piebald gene which is responsible for their white coat and blue eyes (in some of them). Dalmatians with larger dark patches are less likely to be deaf.</p>
        </div>
        <div className="fact-article">
          <h2>12. The Saluki is the oldest dog breed</h2>
          <p>The Guinness World Record for the oldest dog breed is held by the Saluki. The breed dates back to 329BC and were kept as royal pets in Ancient Egypt. Reportedly, there are also carvings found in Southern Iraq of a dog that looks similar to a Saluki which dates back to 7000BC.</p>
        </div>
        <div className="fact-article">
          <h2>13. Chow Chows and Shar-Peis have black tongues</h2>
          <p>The Chow Chow and the Shar-Pei are the only two dog breeds that have fully black tongues. Even more interesting, the cause of these black tongues is currently unknown.</p>
        </div>
        <div className="fact-article">
          <h2>14. Dogs have three eyelids</h2>
          <p>Many owners haven’t heard of this interesting dog fact, but did you know that your four-legged friend has three eyelids? According to iHeartDogs, the third lid is called the ‘haw’ or nictitating membrane, and it’s responsible for keeping the eye protected and lubricated.</p>
        </div>
        <div className="fact-article">
          <h2>15. The African Hunting dog is the most successful hunter in the world</h2>
          <p>The African Hunting Dog is the most successful land hunter in the world. They’re successful in 50-70% of their hunts, which makes them consistently the best mammalian hunter, they even hold the current Guinness World Record for it.</p>
        </div>
        <button onClick={() => navigate("/breeds")}>Learn more about dogs</button>

      </PanelBody>
    </main>
  )
}

export default Dogs