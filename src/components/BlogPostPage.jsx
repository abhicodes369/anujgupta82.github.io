import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard"; // Import BlogPostCard component
import BlogModal from "./BlogModal"; // Import BlogModal component
import BlogViewer from "../components/BlogViewer";

function BlogPostPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sample blog data for 2021
  const blogs2021 = [
    {
      id: 1,
      title: "Innovation in AI Teams",
      date: "Oct 22, 2021",
      excerpt:
        "Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary...",
      content: `
        <p>Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary.</p>
        <br>
        <p>If you are part of the research lab, this often means AI team works on fundamental problems and create fundamental & new techniques to power cutting-edge solutions. They publish a lot, advance the entire area in a fundamental way - this is their true north star. It goes without saying this means lot of publications, paper presentation, talks & tutorials at research conferences, very close collaboration with academia etc.</p>
        <br>
        <p>When it comes to AI teams working in the product settings, the innovation here is of very different type. And in this post and next I will try n focus on this facet. There are mainly 4 type of innovations that happen in such teams:</p>
        <br>
        <p><b>1. Finding newer uses cases and touch points in your product(s) where AI can deliver a completely new experience to the user : </b>This innovation often creates USP/key differentiator for the product compared to the competition in the respective segment. And if the feature is killer, it changes the user's behavior which in turn changes user expectation. And then the competition has no other option but to play the catch-up game. This creates a very strong moat. For example, YouTube uses AI to generate subtitles in multiple languages on the fly. They have fundamentally changed user expectations and other platforms have to have a similar feature.</p>
        <br>
        <p>This kind of innovation is often not as easy as it may sound. I have written about this in an earlier post (ref : Hobbiton - Uses cases where AI can deliver great returns). This requires first principle thinking. Product managers who can envision features in a completely new way using AI, very close collaboration between AI & product teams to understand what is possible what is not, a very good execution to deliver A-class experience (despite AI model will make mistakes).</p>
        <br>
        <p><b>2. Building the dataset for the problem at hand : </b>For AI teams embedded in product settings, building a comprehensive dataset for the problem at hand is often 80% of the battle. Building such a dataset is never writing a bunch of queries on a massive data store at your disposal. AI Teams often have to come up with very smart strategies, hacks to augment data to arrive at a comprehensive dataset. Also, this is not a one-time activity but often highly iterative. What more type of data is needed - comes from the kind of mistakes your models are making.</p>
        <br>
        <p>I will soon be writing a dedicated post on some of the best examples I have seen/heard on innovative ideas to collect data.</p>
        <br>
        <p><b>3. Publishing paper/patent (doesn't happen that often) : </b>AI teams embedded in product teams do write patents and papers - but this is seldom their true north star.</p>
        <br>
        <p>So what about coming up with newer techniques? Rarely AI teams embedded in product teams do this. Why? Because in most cases, known techniques with a comprehensive dataset with rigorous evaluation itself can take your AI solution very very far on business metrics. From there on it is mostly a game of diminishing returns. Read about "later part of S curve" in my earlier post on "<a href="https://www.linkedin.com/posts/activity-6842736295173775360-etDf/" target="_blank" rel="noopener noreferrer">ROI in AI</a>". This is not true only if AI is the backbone of your product and your core value proposition.</p>
        <br>
        <p>To read more on AI in industry vs Academia, please read my earlier post "<a href="https://www.linkedin.com/posts/activity-6836567604467970048-nQu8/" target="_blank" rel="noopener noreferrer">Why machine learning in the industry is different from that is academia</a>"</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 2,
      title: "ROI in AI - Expectations vs Reality",
      date: "Oct 03, 2021",
      excerpt:
        "A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the 'energy' to help you move to the next orbit, most teams falter big time...",
      content: `
        <p>A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the "energy" to help you move to the next orbit, most teams falter big time. While there are many reasons for this, one key reason is the ill-founded expectations by senior people (VPs, CXOs, business leaders etc) in the company. Today's post will explore this facet of AI - often the least spoken one.</p>
        <br>
        <p>Most leaders/companies start AI in their teams/product lines much later. Traditional corporate wisdom has always advocated "quick" wins because that is how one establishes themselves and gets the key stakeholders super excited. So they advocate the same in AI!</p>
        <br>
        <p>This is also driven by:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Articles on AI in popular media with lofty claims (remember the humanoid dancing in Tesla AI day or Sophia - not many people understand these are mere marketing and perception gimmicks)</li>
          <li style="display: list-item; margin-bottom: 10px;">The thought that AI at the end of the day is a code - so it cannot be very different from software engineering. The issues are mere initial hiccups which is always the case with any new tech, so is the case with AI</li>
        </ol>
        <br>
        <p>So most leaders expect the ROI curve in AI to be a vertical takeoff. This expectation is further fueled by the fact that AI doesn't come cheap - data, data engg & AI teams, talent cost, hardware cost, data collection & labeling cost and time etc, MLOps etc Read my previous write up titled the economics of AI</p>
        <br>
        <p>This is where most Orgs/Teams make THE mistake. The true ROI curve in AI is very very different from their expectations. As shown in the figure below, it follows a S shape curve.</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <img src="/images/ROI_blog.jpeg" alt="ROI S-Curve in AI" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto;" />
        </div>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Initial lower part of S: One needs to invest a lot of time and energy with very little ROI - finding the right use case, right quality and quantity of data and labels (more on this in another post), right modeling approach, right metrics etc. This can take anywhere between 1-3 years.</li>
          <li style="display: list-item; margin-bottom: 10px;">Middle part of S: This is where one gets the highest ROI per unit effort. This is because most of the hard work has been done in the first 1-3 years. All key stakeholders have a better understanding of the AI journey. This phase is all about building the 2nd/3rd version of AI systems</li>
          <li style="display: list-item; margin-bottom: 10px;">Later upper part of S: This is where the ROI again starts to stagnate. This phase is where your team is building the 6th/7th version of the system and trying to push systems performance to the upper 90s. This often requires completely new approaches, new algorithms. Its not just adding a couple of lines of code!</li>
        </ol>
        <br>
        <p>Another thing most folks don't necessarily understand is that each of the 3 different phases of the curve requires a very different strategy - type of goals, kind of skillsets, focus areas, etc</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 3,
      title: "Making AI Work For You",
      date: "Sep 18, 2021",
      excerpt:
        "I am often asked why AI is a hard technology (both in terms of time and money). There are multiple reasons for it...",
      content: `
        <p>I am often asked why AI is a hard technology? (both in terms of time and money). There are multiple reasons for it:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Finding the right use case: finding a problem that is important to its users and can be solved well by AI. I talked earlier on this here</li>
          <li style="display: list-item; margin-bottom: 10px;">Having the right data: most companies have tonnes of data but seldom have the data for the problem at hand. In AI its not just the quantity of data that matters but also the quality of data. Do you have the training data that resembles the production data very closely? Does it have enough data points that represent various outliers, mean data points, data points near the actual decision boundary etc</li>
          <li style="display: list-item; margin-bottom: 10px;">Labeling cost: If you need to get your data manually labeled, this will need lots of time and money. The process of labeling itself might not be straightforward. How do you benchmark the quality of labeling? If your labelers are making mistakes this can jeopardize the entire project.</li>
          <li style="display: list-item; margin-bottom: 10px;">Compute cost: the cost of the compute needed for training the model and for inference. This is especially crucial if your solution uses deep learning.</li>
          <li style="display: list-item; margin-bottom: 10px;">Going from a solution to the solution: In AI there is no one way to solve a problem. There are multiple ways and each will give you a different accuracy. Getting from the point where you have a model that gives you an acceptable performance to getting to a model that gives you fabulous performance is often a very long journey.</li>
          <li style="display: list-item; margin-bottom: 10px;">Fitting model into the product to get AI-driven feature: Its not just a simple API integration. One needs to figure out the best UX to serve the predictions, should this UX be intrusive or soft suggestions, UX should be able to gracefully handle the scenarios when the model makes mistakes, a mechanism to let the human take over when it is going all wrong for the end-user, instrumentation to collect data to continuously evaluate the performance of the model on prod data, instrumentation to collect data for future modeling efforts.</li>
          <li style="display: list-item; margin-bottom: 10px;">Need to retrain model: many times AI systems require one to retrain the model after every 15-30 days on the latest data.</li>
          <li style="display: list-item; margin-bottom: 10px;">Talent: DS/ML team alone cannot pull off all the above. You need good and diverse talent for this - ML/DS folks who can evaluate the various approaches depending on the situation and can take the most suitable one to build the right model (and not blindly apply DL), Data engineers to build data pipelines to collect all data, a product manager who can figure out right use case, build instrumentation, UX to handle mistakes, a AI leader who understands this entire life cycle and work very closely with business and speak their language. This talent doesn't come cheap.</li>
        </ol>
        <p>For AI effort to fail - going wrong on just one of the above is enough.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 4,
      title: "Why Machine Learning in Industry is different from that in Academia",
      date: "Sep 6, 2021",
      excerpt:
        "The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications...",
      content: `
        <p>The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications. Despite this there aren't a lot of successful AI systems around us.</p>
        <br>
        <p>The performance of a AI system stems from 2 key components:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Algorithmic technique used to build the model.</li>
          <li style="display: list-item; margin-bottom: 10px;">Dataset used to train the model. You change any one of them, the performance of the AI system will change.</li>
        </ol>
        <p>Academicians (owing to their bias & quest for fundamental advances) keep the dataset constant and vary the algorithm. This allows them to compare 2 AI algorithms and establish which one is better seamlessly. Further, in academia, the test set is usually a chunk of the dataset itself.</p>
        <br>
        <p>This approach doesn't work well in the industry. The industry works on the idea of Minimum Viable Product (MVP). The idea is never to build 'THE model' especially in the early days of an AI system. The idea is to build 'a model' that is good enough for various stakeholders to realize the value and deliver/estimate this value in the fastest possible manner. Further, the model should be able to do well on the production data and not on some benchmark dataset.</p>
        <br>
        <p>Also, note that the value is delivered by a system and not just the model. Model is just a small part of it. One needs to answer the following:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system solve an important problem? a problem users deeply care about</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the value proposition of AI system fit well within the larger Value proposition of the product?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system model and solve the problem (fairly) well? # of mistakes it makes? Is the cost of mistakes ok with your users or its catastrophic?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does one have the right type, quantity and quality of data to solve the problem at hand? If not, invest heavily in data collection and data plumbing first.</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the UI/UX deliver the predictions seamlessly and does it handle the mistakes gracefully? Does it allow the user to override a model especially when predictions are going wrong?</li>
          <li style="display: list-item; margin-bottom: 10px;">How well the system does on production data (which is often very different from training data) - drift in data, drift in labels, handle outliers etc</li>
          <li style="display: list-item; margin-bottom: 10px;">What is the cost of running an AI system? Cost of getting the data labeled continuously to benchmark systems performance?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the (medium-long term) returns from the AI system » overall investment in building and maintaining the AI system? [In short-medium most AI efforts are cost negative]</li>
        </ol>
        <p>The success of AI system depends on all the above. It is this that makes building AI systems in industry an 'Art' unlike the science of building 'models' in academia. In industry, the science of model building is necessary but not sufficient.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 5,
      title: "Hobbiton - Uses cases where AI can deliver great returns",
      date: "Aug 20, 2021",
      excerpt:
        "One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool...",
      content: `
        <p>One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool or a CXO in the company wants to start doing AI (mostly out of FOMO or ill-informed media articles with lofty claims). AI is just a tool to solve problems (though a powerful one), just like other problem-solving tools such as engineering, or operations. Today AI can solve some problems quickly & very well which was not possible until even a decade ago. But that doesn't mean AI is a sledgehammer for every difficult problem. Despite crazy advances in the last decade, AI is a very nascent, fragile and expensive technology and must be applied after due thought and not as a go-to approach for every problem in the world.</p>
        <br>
        <p>One of my favorite examples of this is Google's approach to "searching for special characters in Google Docs". Here is the problem statement: Most users who create docs or decks once in a while use special characters. But it is very hard to find the right special character when you need it. Given the large number of special characters that exist, one cannot show all of them to the user. To facilitate quick accessibility, one requires the ability to search for them. However, there is one particular problem with special characters - most users cannot remember them by name (try recalling names of 10 or more special characters yourself). This renders "textual search" useless. So, how does one solve this? Visual search!</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <a href="https://web.archive.org/web/20220401153355/https://anujgupta82.github.io/images/Google-Doc-Draw-Characters.gif" target="_blank" rel="noopener noreferrer">
            <img src="/images/Google-Doc-Draw-Characters.gif" alt="Google Docs Draw Characters Feature" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
          </a>
        </div>
        <br>
        <p>Google used a very simple but powerful observation - most users can very easily recall how the special character that they need looks like, unlike their name. So, they provided a small sketch pad for users to draw what they remember and use the concepts from computer vision (Sketch-RNN) to suggest a few closest options based on the visual match. The same concept was later used to power <a href="https://web.archive.org/web/20220326173444/https://experiments.withgoogle.com/autodraw" target="_blank" rel="noopener noreferrer" style="color: #3477ad;">Auto draw</a></p>
        <br>
        <p>I often use this example to drive home the point that one often needs to think from first principles when thinking of AI-powered use cases. For the above-mentioned example, the more you think the more you will realize:</p>
        <br>
        <ul style="list-style-type: disc; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">The problem could not have been solved by traditional engineering approaches.</li>
          <li style="display: list-item; margin-bottom: 10px;">It is a very well-defined narrow problem statement.</li>
          <li style="display: list-item; margin-bottom: 10px;">The core AI concept (Sketch-RNN) was just right to solve this problem statement well.</li>
          <li style="display: list-item; margin-bottom: 10px;">The solution (powered by AI in this case) really helped to solve the user's pain point and deliver happiness.</li>
        </ul>
        <p>Having said that - it is not that this application of AI changed the fate of google docs. More on changing the trajectory of products using AI in a separate post. Stay tuned!</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 6,
      title: "Learnings from AI Trenches",
      date: "Aug 8, 2021",
      excerpt:
        "A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams...",
      content: `
        <p>A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams.</p>
        <br>
        <p>Happy to share that over the next 1 year, I will try to put 1-2 posts every week sharing these insights. These will cover topics like ROI, how to do AI right, building and nurturing AI teams, why most AI projects fail, the right way to approach AI, when to apply AI, how AI is done in product teams, etc Follow <a href="#" style="color: #3477ad;">#Learnings_From_AI_Trenches</a> on LinkedIn. Stay tuned</p>
        <br>
        <p>If there is any topic you will like me to write about, pls comment in the post below. I will try and cover them as well. Let us make this super interactive.</p>
      `,
    },
  ];

   const blogs2016 = [
    {
      id: 1,
      title: "Computing Gradients that go into training Neural Nets",
      date: "Aug 22, 2016",
      excerpt:
        "Training neural nets is all about computing gradients. In case you are new to this idea, refer to this awesome post by Andrej Karpathy. Briefly, deep down every ML problem is an optimization problem....",
      content: `
  <h2><strong>Introduction</strong></h2>
  <p>Training neural nets is all about <a href="http://deeplearning.stanford.edu/wiki/index.php/Deriving_gradients_using_the_backpropagation_idea" target="_blank" style="color: blue; text-decoration: underline;">computing gradients</a>. In case you are new to this idea, refer to this awesome <a href="http://karpathy.github.io/neuralnets/" target="_blank" style="color: blue; text-decoration: underline;">post</a> by Andrej Karpathy.</p>
  
  <p>Briefly, deep down every ML problem is an optimization problem. We want to "learn" (find) the weights which will result in least average loss. The way we do it is - start with arbitrary weights and keep adjusting them in small quantities until we get them right i.e. arrive at a set of values for which loss function has least value. Gradients tell us by how much should we adjust each of the weights. Not clear? Check this <a href="https://www.youtube.com/watch?v=yFPLyDwVifc" target="_blank" style="color: blue; text-decoration: underline;">video</a> by Andrew NG and this <a href="http://www.offconvex.org/2016/12/20/backprop/" target="_blank" style="color: blue; text-decoration: underline;">blog</a> by Sanjeev Arora.</p>

  <p>In this post we will focus on the maths that goes into computing these gradients - we will systematically derive gradients. The complexity of calculations depends on 3 things:</p>
  
  <ul>
    <li>1. Depth of the network</li>
    <li>2. Number of training examples (1 or more)</li>
    <li>3. Number of components in input (1=scalar, >1=vector)</li>
  </ul>
  
  <p>Through out this post we assume:</p>
  
  <ul>
    <li>1. No bias term.</li>
    <li>2. \\(\\cdot\\) is matrix multiplication, \\(*\\) is element wise product, \\(\\times\\) is scalar multiplication.</li>
    <li>3. All activations are <a href="https://www.quora.com/What-is-the-sigmoid-function-and-what-is-its-use-in-machine-learnings-neural-networks" target="_blank" style="color: blue; text-decoration: underline;">sigmoid a.k.a logistic</a>. It is defined as \\(f(u) = \\frac{1}{1 + e^{-u}}\\). If you plot it, it comes as:</li>
  </ul>

  <img src="/images/logistic.png" height="200" width="270" alt="Sigmoid function"/>
  <div class="thecap">Sigmoid function</div>
  
  <p>It is easy to see it is smooth and differentiable and bound between 0 and 1.</p>

  <p><strong>Derivative</strong></p>
  <p>The derivative of logistic function \\(\\sigma\\) is simply:</p>

  $$\\frac{d}{dx} \\sigma (x) = \\sigma (x) ( 1-\\sigma (x))$$

  <p>From where this comes? read on:</p>

  $$\\begin{align}
  \\frac{d}{dx} \\sigma(x) &= \\frac{d}{dx} \\left[ \\frac{1}{1+e^{-x}} \\right] \\\\
  &= \\frac{d}{dx} (1+e^{-x})^{-1} \\\\
  &= -(1+e^{-x})^{-2}(-e^{-x}) \\\\
  &= \\frac{e^{-x}}{(1+e^{-x})^2} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{e^{-x}}{(1+e^{-x})} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{(1 + e^{-x} -1)}{(1+e^{-x})} \\\\
  &= \\frac{1}{(1+e^{-x})} \\cdot \\left( 1 - \\frac{1}{(1+e^{-x})} \\right) \\\\
  &= \\sigma(x)(1-\\sigma(x))
  \\end{align}$$

  <p>likewise,</p>

  $$\\frac{d}{dx}\\sigma(ax) = a(\\sigma(ax))(1-\\sigma(ax))$$

  <p>We will be using the above result a lot, so make sure you understand it. If it is not clear, have a look at this <a href="http://kawahara.ca/how-to-compute-the-derivative-of-a-sigmoid-function-fully-worked-example/" target="_blank" style="color: blue; text-decoration: underline;">post</a>.</p>

  <p>To compute the gradients, we will start with the simplest case and increase the complexity gradually. To keep things simple we will complete it in 7 parts</p>

  <ol start="1">
    <li><a href="https://github.com/anujgupta82/anujgupta82.github.io_old/blob/master/_posts/2016-08-26-gradients-1.markdown" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (scalar)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" style="color: blue; text-decoration: underline;">1 layer network, batch training (>1 training examples where each is a vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" style="color: blue; text-decoration: underline;">2 layer network with 1 node hidden layer, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network with 2 node hidden layer, 1 training example (vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network, batch training (>1 training examples where each is a vector)</a></li>
    <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">Generalization and take home</a></li>
  </ol>

  <a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Next</a>
`,
    },
    {
    // ...existing code...
  "id": 2,
  "title": "Gradients - Part 1",
  "date": "2016-08-26",
  "image": "images/gradient-diagram.jpg",
  "content": `
Consider a simplest version of a neural net - 1 layer, 1 input node (scalar).

![Neural Net Diagram](images/gradient-diagram.jpg)

Input is $(x, y)$: $x, y$ both are scalars. (Later on everything will be a matrix, so just to be using same notation. We will abuse the notation to express scalars as matrix of dimension $1 \\times 1$). In matrix form $x, y$ are $[X]_{1 \\times 1}$ and $[y]_{1 \\times 1}$. Let $W$ be weight matrix. In this case its $[W]_{1 \\times 1}$.

Let $\hat{y}$ be the predicted output. Then,
$$
\hat{y} = \\sigma(Wx) = \\frac{1}{1 + e^{-X \\cdot W}}
$$

Let loss be squared error loss. For ease of maths we take $\\frac{1}{2}$ of it.
$$
L = \\frac{1}{2}(y - \hat{y})^2
$$

Let's compute gradients, $\\nabla_W L = \\frac{\\partial L}{\\partial W}$

### Gradient Calculation

$$
\\frac{\\partial L}{\\partial W} = \\frac{\\partial L}{\\partial \hat{y}} \\cdot \\frac{\\partial \hat{y}}{\\partial W}
$$

Where:
- $\\frac{\\partial L}{\\partial \hat{y}} = - (y - \hat{y})$
- $\\frac{\\partial \hat{y}}{\\partial W} = \\hat{y}(1 - \\hat{y}) x$

So,
$$
\\frac{\\partial L}{\\partial W} = - (y - \hat{y}) \\cdot \\hat{y}(1 - \\hat{y}) x
$$

Or, equivalently,
$$
\\frac{\\partial L}{\\partial W} = (\\hat{y} - y) \\cdot \\hat{y}(1 - \\hat{y}) x
$$

---

#### Derivative of Logistic Function

The derivative of logistic function $\\sigma$ is:
$$
\\frac{d}{dx} \\sigma(x) = \\sigma(x)(1 - \\sigma(x))
$$

**Proof:**
$$
\\frac{d}{dx} \\sigma(x) = \\frac{d}{dx} \\left[ \\frac{1}{1 + e^{-x}} \\right] = \\frac{e^{-x}}{(1 + e^{-x})^2} = \\frac{1}{1 + e^{-x}} \\left(1 - \\frac{1}{1 + e^{-x}} \\right) = \\sigma(x)(1 - \\sigma(x))
`  
},
    {
      // ...existing code...

  "id": 3,
  "title": "Gradients - Part 2",
  "date": "2016-08-29",
  "image": "images/gradient-part2-diagram.jpg",
  "content": `
Continuing from Part 1, let's consider a neural network with 1 layer and 1 input node, but now generalize to vector/matrix notation.

![Neural Net Diagram](images/gradient-part2-diagram.jpg)

Suppose input $x$ is a vector and $W$ is a weight matrix. The predicted output is:
$$
\hat{y} = \\sigma(Wx)
$$

Let the loss be squared error:
$$
L = \\frac{1}{2} (y - \hat{y})^2
$$

### Gradient Calculation

The gradient with respect to $W$ is:
$$
\\frac{\\partial L}{\\partial W} = (\\hat{y} - y) \\cdot \\hat{y}(1 - \\hat{y}) x^T
$$

#### Step-by-step:

1. Compute $\\frac{\\partial L}{\\partial \hat{y}} = \\hat{y} - y$
2. Compute $\\frac{\\partial \hat{y}}{\\partial W} = \\hat{y}(1 - \\hat{y}) x^T$
3. Multiply to get the gradient.

---

#### Derivative of Logistic Function (Reminder)

The derivative of logistic function $\\sigma$ is:
$$
\\frac{d}{dx} \\sigma(x) = \\sigma(x)(1 - \\sigma(x))
$$

**Proof:**
$$
\\frac{d}{dx} \\sigma(x) = \\frac{d}{dx} \\left[ \\frac{1}{1 + e^{-x}} \\right] = \\frac{e^{-x}}{(1 + e^{-x})^2} = \\frac{1}{1 + e^{-x}} \\left(1 - \\frac{1}{1 + e^{-x}} \\right) = \\sigma(x)(1 - \\sigma(x))
$$
`

    },
  
      // ...existing code...
{
  "id": 4,
  "title": "Gradients - Part 3",
  "date": "Aug 30, 2016",
  "image": "images/gradient-part3-diagram.jpg",
  "content": `
### 1 layer network, multiple training examples (each example is a vector)

![Neural Net Diagram](images/gradient-part3-diagram.jpg)

Multiple training examples correspond to the scenario of batch training. Each input is still a vector. Our neural net still has 1 layer. For simplicity, assume we have 4 examples, each having 3 components.

Suppose $W$ is a $3 \\times 1$ weight matrix and $X$ is a $4 \\times 3$ input matrix (4 examples, each with 3 features):

$$
\\hat{y}_i = \\frac{1}{1+e^{-(x_{i}^{1} w_1 + x_{i}^{2} w_2 + x_{i}^{3} w_3)}}
$$

Loss:
$$
L = \\sum_{i=1}^4 \\frac{1}{2}(y_i - \\hat{y}_i)^2
$$

Gradient for $w_1$:
$$
\\frac{\\partial L}{\\partial w_1} = \\sum_{i=1}^4 (\\hat{y}_i - y_i) \\cdot \\hat{y}_i (1-\\hat{y}_i) x_{i}^{1}
$$

Similarly for $w_2$ and $w_3$.

Or, in matrix form:
$$
\\frac{\\partial L}{\\partial W} = X^T \\cdot \\Delta l_1
$$

Where $\\Delta l_1$ is a vector with components $\\Delta l_1^i = (\\hat{y}_i - y_i) \\cdot \\hat{y}_i (1-\\hat{y}_i)$.

---
`
},

  
// ...existing code...     `
  
    {
      "id": 5,
  "title": "Gradients - Part 4a",
  "date": "Sep 9, 2016",
  "image": "images/gradient-part4a-diagram.jpg",
  "content": `
### 2 layer network, single training example (vector)

![Neural Net Diagram](images/gradient-part4a-diagram.jpg)

Suppose input $X$ is a vector, $W_1$ is a $3 \\times 1$ weight matrix for the first layer, $W_2$ is a scalar for the second layer.

Layer 1 output:
$$
l_1 = \\sigma(X \\cdot W_1)
$$

Predicted output:
$$
\\hat{y} = \\sigma(l_1 W_2)
$$

Loss:
$$
L = \\frac{1}{2}(y - \\hat{y})^2
$$

Gradients:

For $W_2$:
$$
\\frac{\\partial L}{\\partial W_2} = (\\hat{y} - y) \\cdot \\hat{y}(1-\\hat{y}) l_1
$$

For $W_1$:
$$
\\frac{\\partial L}{\\partial W_1} = \\Delta l_1 \\cdot X
$$

Where:
$$
\\Delta l_2 = (\\hat{y} - y) \\cdot \\hat{y}(1-\\hat{y})
$$
$$
\\Delta l_1 = \\Delta l_2 \\cdot W_2 \\cdot l_1 (1-l_1)
$$

So, $\\frac{\\partial L}{\\partial W_1} = \\Delta l_1 \\cdot X$.
`  
    },
    {

  id: 6,
  title: "Gradients - Part 4b",
  date: "Sep 11, 2016",
  excerpt: "Part 4 of computing gradients for training Neural Nets",
  image: "assets/gradeints/NN_4_2.jpeg",
  content: `
## 2 layer network, single training example (vector)

This is in continuation of [last post](https://anujgupta82.github.io/pages/blog-post) where we derived gradients for 2 layer network where hidden layer has only 1 node.

### 1 hidden layer with $\\geq$ 2 nodes

We will derive gradients for hidden layer with 2 nodes. 3 or more nodes is a straight forward extension.

![Neural Net with 2 nodes in hidden layer](assets/gradeints/NN_4_2.jpeg)

Neural net with 2 layer, 2 nodes in hidden layer. Input is a vector.  
First layer ($l_1$) has weight matrix $[W_1]_{3 \\times 2}$:

$$
W_1 = 
\\begin{bmatrix}
w_{1}^{11} & w_{1}^{12} \\\\
w_{1}^{21} & w_{1}^{22} \\\\
w_{1}^{31} & w_{1}^{32}
\\end{bmatrix}
$$

Second layer ($l_2$) has weight matrix $[W_2]_{2 \\times 1}$:

$$
W_2 = 
\\begin{bmatrix}
w_{2}^{1} \\\\
w_{2}^{2}
\\end{bmatrix}
$$

### Input & Output definitions

Exactly same as previous setting. Input is $(\\vec{X},y)$ : $\\vec{X}$ is a vector, while $y$ is a scalar.

$X = [x^1, x^2, x^3]$ where $x^i$ is $i^{th}$ component of $\\vec{X}$.

Thus, in matrix form $x, y$ are $[X]_{1\\times 3}$ and $[y]_{1\\times 1}$.

Let $l_1$ be output of layer 1 (hidden layer in this case). In matrix format, $[l_1]_{1\\times 2}$

$$
l_1 = \\sigma([X] \\cdot [W_1]) = 
\\begin{bmatrix}
l_1^1 & l_1^2
\\end{bmatrix}
$$

where

$$
l_1^1 = \\frac{1}{1 + e^{-(x^1 w_{1}^{11} + x^2 w_{1}^{21} + x^3 w_{1}^{31})}}
$$

$$
l_1^2 = \\frac{1}{1 + e^{-(x^1 w_{1}^{12} + x^2 w_{1}^{22} + x^3 w_{1}^{32})}}
$$

Let $\\hat{y}$ be predicted output. Then as per diagram, it is also the output of layer 2 ($l_2$). In matrix format, $[\\hat{y}]_{1\\times 1}$

$$
\\hat{y} = \\sigma([l_1] \\cdot [W_2]) = \\frac{1}{1 + e^{-(l_1^1 w_{2}^{1} + l_1^2 w_{2}^{2})}}
$$

### Loss

Like before, we will use half of squared error loss.

$$
L = \\frac{1}{2} (y - \\hat{y})^{2}
$$

### Gradients

There are 2 set of gradients: $\\nabla_{W_1} L$ and $\\nabla_{W_2} L$. Let us first compute $\\nabla_{W_2} L$

$[\\nabla_{W_2} L]_{2\\times 1}$

Let's first compute $\\frac{\\partial L}{\\partial w_{2}^{1}}$:

$$
\\frac{\\partial L}{\\partial w_2^1} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial w_2^1}
$$

Where

$$
\\frac{\\partial L}{\\partial \\hat{y}} = -(y - \\hat{y})
$$

$$
\\frac{\\partial \\hat{y}}{\\partial w_2^1} = \\hat{y} (1-\\hat{y}) l_1^1
$$

So,

$$
\\frac{\\partial L}{\\partial w_2^1} = (\\hat{y} - y) \\cdot \\hat{y} (1-\\hat{y}) l_1^1
$$

Let

$$
\\Delta l_{2} = (\\hat{y} - y) \\cdot \\hat{y} (1-\\hat{y})
$$

Then,

$$
\\frac{\\partial L}{\\partial w_2^1} = \\Delta l_{2} \\cdot l_1^1
$$

Likewise,

$$
\\frac{\\partial L}{\\partial w_2^2} = \\Delta l_{2} \\cdot l_1^2
$$

So,

$$
\\frac{\\partial L}{\\partial W_2} = [l_1^1, l_1^2]^T \\cdot \\Delta l_{2}
$$

---

Now, $[\\nabla_{W_1} L]_{3\\times 2}$

Let's focus on $\\frac{\\partial L}{\\partial w_{1}^{11}}$:

$$
\\frac{\\partial L}{\\partial w_1^{11}} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial l_1^1} \\times \\frac{\\partial l_1^1}{\\partial w_1^{11}}
$$

Where

$$
\\frac{\\partial \\hat{y}}{\\partial l_1^1} = \\hat{y} (1-\\hat{y}) w_2^1
$$

$$
\\frac{\\partial l_1^1}{\\partial w_1^{11}} = l_1^1 (1-l_1^1) x^1
$$

So,

$$
\\frac{\\partial L}{\\partial w_1^{11}} = (\\hat{y} - y) \\cdot \\hat{y} (1-\\hat{y}) w_2^1 \\cdot l_1^1 (1-l_1^1) x^1
$$

Let

$$
\\Delta l_1^1 = \\Delta l_2 \\cdot w_2^1 \\cdot l_1^1 (1-l_1^1)
$$

Then,

$$
\\frac{\\partial L}{\\partial w_1^{11}} = \\Delta l_1^1 x^1
$$

Similarly for other weights.

So, in matrix form:

$$
\\frac{\\partial L}{\\partial W_1} = X^T \\cdot \\Delta l_1
$$

Where

$$
\\Delta l_1 = [\\Delta l_1^1, \\Delta l_1^2]
$$

and

$$
\\Delta l_1^1 = \\Delta l_2 \\cdot w_2^1 \\cdot l_1^1 (1-l_1^1)
$$

$$
\\Delta l_1^2 = \\Delta l_2 \\cdot w_2^2 \\cdot l_1^2 (1-l_1^2)
$$

**Summary of key equations:**

- $\\Delta l_{2} = (\\hat{y} - y) \\cdot \\hat{y} (1-\\hat{y})$
- $\\Delta l_{1} = (\\Delta l_{2} \\cdot W_2^T) \\cdot l_1 (1-l_1)$
- $\\frac{\\partial L}{\\partial W_1} = X^T \\cdot \\Delta l_1$
- $\\frac{\\partial L}{\\partial W_2} = l_1^T \\cdot \\Delta l_2$

---

**Python code for training:**

\`\`\`python
import numpy as np

X = np.array([0,0,1])
y = np.array([0])

alpha = 0.5  # learning rate - hyperparameter

W_1 = np.random.random((3,2))
W_2 = np.random.random((2,1))

for i in range(1000):
    layer_1 = 1/(1+np.exp(-(np.dot(X,W_1))))
    layer_2 = 1/(1+np.exp(-(np.dot(layer_1,W_2))))

    layer_2_delta = (layer_2 - y)*(layer_2*(1-layer_2))
    layer_1_delta = layer_2_delta.dot(W_2.T)*(layer_1*(1-layer_1))

    W_1 = W_1 - alpha * np.outer(X, layer_1_delta)
    W_2 = W_2 - alpha * np.outer(layer_1, layer_2_delta)
\`\`\`

[Prev](https://anujgupta82.github.io/2016/08/28/gradients-2/)
`

// ...existing code...
    },
    {
      id: 7,
      title: "Gradients - summary",
      date: "Sep 13, 2016",
      excerpt:
        "Take home on Computing Gradients that go into training Neural Nets",
      content: `

      <h2><strong>Generalization</strong></h2>
      <p>In this post, based on our conclusions in last post, we will try and generalise a strategy to compute gradients for arbit networks, as shown in figure below:</p>
         <img src="assets/images/NN_generic.jpeg" height="200" width="270" alt="Neural "/>
         <p>simple neural net
Imagine we have a (Feed forward) network with 1 input layer \(L_0\), 1 output layer \(L_3\) and 2 hidden layers \(L_1\), \(L_2\) respectively. Further, let \(l_i\) be output of layer \(L_i\). Also, by design, \(l_1 = X\) [input] and \(l_3 = \hat{y}\) [output]. Let \(W_{ij}\) be weights between layers \(L_i\) and \(L_j\). We have 3 weight matrices - \(W_{01}\), \(W_{12}\) and \(W_{23}\).</p>
<h2>Tables Are Cool</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th style="text-align: left;">col 1 is left-aligned</th>
    <th style="text-align: center;">col 2 is centered</th>
    <th style="text-align: right;">col 3 is right-aligned</th>
  </tr>
  <tr>
    <td style="text-align: left;">$1600</td>
    <td style="text-align: center;">$12</td>
    <td style="text-align: right;">$1</td>
  </tr>
</table><br>
<hr>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Name</th>
    <th>Lunch order</th>
    <th>Spicy</th>
    <th>Owes</th>
  </tr>
  <tr>
    <td>Joan</td>
    <td>saag paneer</td>
    <td>medium</td>
    <td>$11</td>
  </tr>
  <tr>
    <td>Sally</td>
    <td>vindaloo</td>
    <td>mild</td>
    <td>$14</td>
  </tr>
  <tr>
    <td>Erin</td>
    <td>lamb madras</td>
    <td>HOT</td>
    <td>$5</td>
  </tr>
</table>
<br><hr>
<p> ||Grouping||</p>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td>Content</td>
    <td>Long Cell</td>
  </tr>
  <tr>
    <td>Content</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table><br><hr>

<p>New Section | More | Data | And More | With an escaped '|' ||<p>
<p>[Prototype table]</p>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td>foo</td>
    <td>bar</td>
  </tr>
  <tr>
    <td>baz</td>
    <td>bim</td>
  </tr>
</table>
      `
    },
    
  ]; 

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  // Sort blogs by date (newest first) for navigation
  const sortedBlogs = [...blogs2021].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const handleNext = () => {
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    if (currentSortedIndex < sortedBlogs.length - 1) {
      const nextBlog = sortedBlogs[currentSortedIndex + 1];
      setSelectedBlog(nextBlog);
    }
  };

  const handlePrevious = () => {
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    if (currentSortedIndex > 0) {
      const previousBlog = sortedBlogs[currentSortedIndex - 1];
      setSelectedBlog(previousBlog);
    }
  };

  const hasNext = () => {
    if (!selectedBlog) return false;
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    return currentSortedIndex < sortedBlogs.length - 1;
  };

  const hasPrevious = () => {
    if (!selectedBlog) return false;
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    return currentSortedIndex > 0;
  };
  return (
    <>
      <div className="content container mx-auto py-6 sm:py-8 lg:py-10">
        <h1 className="page__title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
          Blog Posts
        </h1>

        <div className="archive px-4 sm:px-6 md:px-8 lg:px-0">
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2023
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component
              title="Product management for AI products - old wine in new bottle?"
              date="Aug 05, 2023"
              excerpt="The answer lies in the specialized skill set required for product management in the realm of AI. The traditional principles and experiences in product management for standard software products do not suffice for AI products. Product management in AI development demands a significant upgrade."
            />
          </div>

          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2022
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component again
              title="Alexa AI and Layoffs"
              date="Nov 23, 2022"
              excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
            />
          </div>
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2021
          </h2>
          {blogs2021.map((blog) => (
            <div key={blog.id} className="list__item mb-4 sm:mb-6">
              <BlogPostCard
                title={blog.title}
                date={blog.date}
                excerpt={blog.excerpt}
                onClick={() => openModal(blog)}
              />
            </div>
          ))}
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2020
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component again
              title="Alexa AI and Layoffs"
              date="Nov 23, 2020"
              excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
            />
          </div>
          {/* ... Add more BlogPostCard components for other blog posts, passing in their data as props */}
        </div>

        {/* ——— 2016 Blog — Gradients for Neural Nets ——— */}
        <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2016
          </h2>
      <div className="blog-post-page">
        {blogs2016.map((blog) => (
          <div key={blog.id} className="list__item mb-4 sm:mb-6">
            <BlogPostCard
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
              onClick={() => openModal(blog)}
            />
          </div>
        ))}

        {selectedBlog && (
          <div className="mt-10">
            <BlogViewer blog={selectedBlog} />
          </div>
        )}
      </div>
      </div>

      {/* Modal for displaying full blog content */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blog={selectedBlog}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={hasNext()}
        hasPrevious={hasPrevious()}
      />
    </>
  );
}

export default BlogPostPage;
