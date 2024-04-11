export const blogs = [
    {
        id: 1,
        author: 'Jad Joubran',
        authorImage: '/assets/images/blog/authors/jadjoubran.jpg',
        authorBio: 'Jad thrives in dynamic environments, where he can collaborate with diverse teams to turn ideas into reality. From front-end interfaces to back-end systems, he has a proven track record of delivering high-quality code that not only meets but exceeds client expectations.',
        category: 'Frontend',
        title: 'Immutable array updates with Array.prototype.with',
        image: '/assets/images/blog/latest-1.jpg',
        heading: 'This article explores how this method works and how to use it to update an array without mutating the original array. Intro to Array.prototype.with(index, value)',
        tags: ['Javascript', 'Immutable', 'Array'],
        featured: true,
        content: (
            <>         
                <p className="mt-10">Browsers recently gained a new interoperable method that you can call on Arrays: &nbsp;&nbsp;&nbsp;
                    <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/with">
                        <code translate="no" dir="ltr">Array.prototype.with()</code>
                    </a>.
                </p>
                <p>This article explores how this method works and how to use it to update an array without mutating the original array.</p>

                <h1 className="text-20 mt-10">Intro to Array.prototype.with(index, value)</h1>
                <p className="mt-3"><code>The Array.prototype.with(index, value)</code> &nbsp; method returns a copy of the array it's called on with the index set to the new value you provide.</p>
                <p className="mb-10">The following example shows an array of ages. You'd like to create a new copy of the array while changing the second age from 15 to 16:</p>
                <code>
                    const ages = [10, 15, 20, 25];<br/><br/>

                    const newAges = ages.with(1, 16);<br/>
                    console.log(newAges); // [10, 16, 20, 25]<br/>
                    console.log(ages); // [10, 15, 20, 25] (unchanged)<br/>
                </code>
                <p className="mt-10">Breaking down the code:: ages.with(...) returns a copy of the ages variable without modifying the original array. ages.with(1, …) replaces the second item (index = 1). ages.with(1, 16) assigns the second item to 16.</p>
                <p className="mt-3">This is how you were able to create a new copy of the array with a modification.</p>
                <p className="mt-3 mb-10">This is pretty useful when you want to make sure that the original array remains unchanged, and this article covers some of the use cases for this. But, for now, take a look at what would have happened had you used the bracket notation:</p>
                <code>
                    const ages = [10, 15, 20, 25];<br/><br/>

                    const newAges = ages;<br/>
                    newAges[1] = 16;<br/>
                    console.log(newAges); // [10, 16, 20, 25]<br/>
                    console.log(ages); // [10, 16, 20, 25] (Also changed 🙁)<br/>
                </code>
                <p className="mt-10">As you can see, the ages variable was also modified in this example. That’s because when you assign ages = newAges, JavaScript does not copy the array but rather creates a reference to the other array. So, any change in one will also affect the other one as they are both pointing to the same array.</p>
                <h1 className="text-20 mt-10">Array.prototype.with() and immutability</h1>
                <p className="mt-3">Immutability is at the heart of many frontend libraries and frameworks, to name a few: React (and redux), and Vue</p>
                <p className="mt-3">Also, other libraries and frameworks don't necessarily require immutability but encourage it for better performance: Angular and Lit</p>
                <p className="mt-3 mb-10">So, developers often had to use other methods that returned copies of arrays which sacrificed code readability:</p>
                <code>
                    const ages = [10, 15, 20, 25];<br/><br/>

                    const newAges = ages.map((age, index) ={'>'} {'{'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{'if'} (index === 1) {'{'}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 16;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;return age;<br/>
                    {'}'});<br/><br/>

                    console.log(newAges); // [10, 16, 20, 25]<br/>
                    console.log(ages); // [10, 15, 20, 25] (Remains unchanged)<br/>
                </code>
                <p className="mt-10 mb-10">Since the .with() method returns a copy of the array, you can chain multiple .with() calls or even other array methods. The following example demonstrates incrementing the second and third ages from the array:</p>
                <code>
                    const ages = [10, 15, 20, 25]; <br/><br/>

                    const newAges = ages.with(1, ages[1] + 1).with(2, ages[2] + 1)<br/><br/>

                    console.log(newAges); // [10, 16, 21, 25]<br/>
                    console.log(ages); // [10, 15, 20, 25] (unchanged)<br/>
                </code>
                <h1 className="text-20 mt-10">Other new immutable methods</h1>
                <p className="mt-3">Three other methods recently became interoperable:</p>
                <ul className="list-disc ml-8">
                    <li><code>Array.prototype.toReversed()</code> which reverses the array without mutating the original array.</li>
                    <li><code>Array.prototype.toSorted()</code> which sorts the array without mutating the original array.</li>
                    <li><code>Array.prototype.toSpliced()</code> which works like .splice() but without mutating the original array.</li>
                </ul>
                <p className="mt-3">These three methods are, according to MDN, the copying version of their counterparts. These methods can also be used where immutability is expected or preferred.</p>
                <p className="mt-3">In conclusion, immutable updates can be achieved more easily in JavaScript with one of the four methods presented in this article. Specifically, the <code>.with()</code> method makes it easier to update a single element of the array without mutating the original array.</p>
            </>
        )
    },
    {
        id: 2,
        author: 'Rachel Andrew',
        authorImage: '/assets/images/blog/authors/rachelandrew.jpg',
        authorBio: 'With a deep understanding of modern JavaScript frameworks like React, Angular, and Vue.js, Rachel stays ahead of the curve, embracing new technologies and methodologies to continuously improve his craft. He is also proficient in server-side JavaScript using Node.js, allowing him to build full-stack applications with ease.',
        category: 'Frontend',
        title: 'Celebrate a more interoperable web with Interop 2023',
        image: '/assets/images/blog/latest-2.jpg',
        heading: 'At the end of last year Interop 2023 wrapped up. This effort from browser vendors and other parties aims to create a more interoperable web, with fewer differences between browsers to trip you up. This post shares the final results, and also some of the Chrome team\'s favorite features.',
        tags: ['CSS', 'Theme'],
        featured: true,
        content: (
            <>
                <p className="mt-3">At the end of last year Interop 2023 wrapped up. This effort from browser vendors and other parties aims to create a more interoperable web, with fewer differences between browsers to trip you up. This post shares the final results, and also some of the Chrome team's favorite features.</p>
                <h1 className="text-20 mt-10">What are we excited about?</h1>
                <p className="mt-3">Find the full list of focus areas for 2023 on the Interop 2023 Dashboard. Some focus areas—such as :has(), container queries, and the inert attribute, covered an entire feature. Others, for example the work on Flexbox, dealt with some subtle test failures in an existing cross-browser feature.</p>
                <h1 className="text-18 mt-8">:has()</h1>
                <p className="mt-3">There has been a huge amount of excitement about the functional pseudo-class :has(), because it brought to the platform a key request from developers. It gives you a parent selector— you can select an element based on things that are inside it. However, it can be used for so much more. As explained in CSS wrapped, you can select much more than a parent element, and even do sideways selections.</p>
                <p className="mt-5 mb-10">Una Kravets, a Developer Relations Engineer on the Chrome team explains:</p>
                <code>
                    "The :has() selector is one of the most flexible and powerful newly available CSS features. With it, you can style any parent based on the presence, state, or even number of child elements. But what's more is that you can combine it with other combinators to style siblings and really gain a new level of style control over your UI. It's such a flexible feature! I've already seen a ton of cool demos that reduce the need to rely on additional scripting when taking advantage of the power of :has()."
                </code>
                <p className="mt-10">As Philip Jägenstedt, a software engineer on Chrome reminded me, :has() was the top feature that developers struggled with due to lack of support when asked in the State of CSS survey in 2023. So we're not the only people excited to have this available.</p>
                <p className="mt-3 mb-3">You can listen to Una, along with Adam Argyle, talk about has() on The CSS Podcast, then learn more about :has() from these posts from around the web community.</p>
                <ul className="list-disc ml-8">
                    <li><a href="https://bejamas.io/blog/learn-css-has-selector-by-examples-top-use-cases/">Learn CSS :has() selector by examples</a></li>
                    <li><a href="https://robbowen.digital/wrote-about/locking-scroll-with-has/">Locking scroll with :has()</a></li>
                    <li><a href="https://blog.cassidoo.co/post/css-has/">A use-case for CSS :has()</a></li>
                </ul>
                <h1 className="text-18 mt-8">Container queries</h1>
                <p className="mt-3">2023 turned out to be a great year for things once deemed impossible. In addition to :has(), the web platform finally gained cross-browser support for container queries. You've been asking for container (or element) queries since 2011, only a year after the concept of responsive design was introduced. Now, it's here, and available in all major browser engines.</p>
                <p className="mt-3 mb-3">Una and Adam discussed container queries in the CSS Podcast, and Una introduced them in an episode of Designing in the Browser. The community has also been sharing plenty of tips and ideas.</p>
                <ul className="list-disc ml-8">
                    <li><a href="https://ishadeed.com/article/container-queries-are-finally-here/">Container queries are finally here</a></li>
                    <li><a href="https://moderncss.dev/container-query-units-and-fluid-typography/">Container Query Units and Fluid Typography</a></li>
                </ul>
                <h1 className="text-18 mt-8">Subgrid</h1>
                <p className="mt-3">Subgrid is my favorite inclusion in Interop 2023. It lets you define a grid on a parent element, and then use the track sizes that are defined on that parent, on grids nested inside that main grid. Thanks to the work of Microsoft Edge's web platform engineers, subgrid became available in all major browser engines during 2023, to boost the score for Chrome, and bring this exciting feature to everyone.</p>
                <p className="mt-3 mb-10">Chrome Developer Relations Engineer Adriana Jara told me how grid and subgrid made creating a great UI easier,</p>
                <code>
                    "I am terrible at visuals, layouts, keeping a consistent look, and adapting to screens. But with grid and subgrid somehow creating a design that works across multiple screen sizes and adapts automatically to content is possible! It's my favorite because it tackles a basic need to create a website that gives users a decent experience without a ton of expertise."
                </code>
                <p className="mt-3 mt-10">Adam has been creating some amazing content to help you understand these new features, such as the High Definition CSS Color Guide and gradient.style, and talking about color functions on the CSS Podcast.</p>
                <p className="mt-3 mb-3">It's exciting to have these features available in all major browser engines. Find out more in these great articles.</p>
                <ul className="list-disc ml-8">
                    <li><a href="https://ryantrimble.com/blog/mixing-colors-with-css/">Mixing colors with CSS</a></li>
                    <li><a href="https://www.joshwcomeau.com/css/color-formats/">Color formats in CSS</a></li>
                    <li><a href="https://www.joshwcomeau.com/css/color-formats/">LCH colors in CSS: what, why, and how?</a></li>
                </ul>
                <h1 className="text-20 mt-10">Looking forward to Interop 2024</h1>
                <p className="mt-3">Once features become interoperable, they become part of Baseline—newly available. It's exciting to see the number of new features that have entered this group during 2023, in no small part due to the work of everyone involved in Interop 2023. It will very soon be time to announce the selected focus areas for 2024, and we're all looking forward to seeing how much better the web platform can become this year.</p>
            </>
        )
    },
    {
        id: 3,
        author: 'Rachel Andrew',
        authorImage: '/assets/images/blog/authors/rachelandrew.jpg',
        authorBio: 'Now times have changed and we at Investment Assets Properties are thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties.',
        category: 'Frontend',
        title: 'New to the web platform in January',
        image: '/assets/images/blog/latest-3.jpg',
        heading: 'Discover some of the interesting features that have landed in stable and beta web browsers during January 2024. Stable browser releases',
        tags: ['HTML', 'Javascript'],
        featured: true,
        content: (
            <>
                <p className="mt-3">Discover some of the interesting features that have landed in stable and beta web browsers during January 2024.</p>
                <h1 className="text-20 mt-10">Stable browser releases</h1>
                <p className="mt-3">In January 2024 Firefox 122, Chrome 121, and Safari 17.3 became stable. This post looks at the new features added to the web platform.</p>
                <h1 className="text-18 mt-8">{'<hr> in <select>'}</h1>
                <p className="mt-3">{'Firefox 122 adds <hr> elements as an allowable child of <select> elements. This helps with readability of select lists with a lot of options. All main browser engines now support this feature. However, it is worth noting that no browser currently exposes the <hr> to the accessibility tree.'}</p>
                <h1 className="text-18 mt-8">HTMLSelectElement.showPicker</h1>
                <p className="mt-3">{'Also for <select> elements in Firefox is the showPicker() method for HTMLSelectElement. This is the same picker that would normally be displayed when the element is selected, but can be triggered from a button press or other user interaction.'}</p>
                <h1 className="text-18 mt-8">Largest Contentful Paint (LCP) API</h1>
                <p className="mt-3">Firefox 122 also supports the LCP API. This performance API provides timing information about the largest image or text paint before users interact with a web page. Learn more about LCP in the LCP documentation.</p>
                <h1 className="text-18 mt-8">CSS scrollbar properties</h1>
                <p className="mt-3">Chrome 121 adds support for the scrollbar properties scrollbar-color and scrollbar-width. Learn more about this in the article Scrollbar styling.</p>
                <h1 className="text-18 mt-8">CSS font-palette animation</h1>
                <p className="mt-3">The font-palette property lets you select a specific palette to render a color font. This property now supports animation, so switching between palettes becomes a smooth transition between the two selected palettes.</p>
                <h1 className="text-18 mt-8">The transfer() and transferToFixedLength() methods of ArrayBuffer</h1>
                <p className="mt-3">Firefox includes the JavaScript transfer() and transferToFixedLength() methods of ArrayBuffer. The transfer() method creates a new ArrayBuffer with the same byte contents as the current ArrayBuffer, then detaches the original ArrayBuffer. The transferToFixedLength() method works in the same way, but creates a fixed size ArrayBuffer.</p>
                <h1 className="text-18 mt-8">Updates to the Speculation Rules API</h1>
                <p className="mt-3">Sites use the Speculation Rules API, to programmatically tell Chrome which pages to prerender, creating a better user experience by reducing page navigation time.</p>
                <p className="mt-3">Chrome 121 includes support for document rules: they are an extension to the speculation rules syntax that lets the browser obtain the list of URLs for speculative loading from elements in a page. Document rules may include criteria for which of these links can be used. This, coupled with a new "eagerness" field lets you automatically prefetch or prerender links on pages immediately, on hover or on mouse down.</p>
                <h1 className="text-20 mt-10">Beta browser releases</h1>
                <p className="mt-3">Beta browser versions give you a preview of things that will be in the next stable version of the browser. It's a great time to test new features, or removals, that could impact your site before the world gets that release. New betas are Firefox 123, Chrome 122, and Safari 17.4. These releases bring many great features to the platform. Check out the release notes for all of the details. Here are just a few highlights.</p>
                <p className="mt-3">Firefox 123 beta includes the Declarative Shadow DOM.</p>
                <p className="mt-3">Also in Firefox 123 is support for the 103 Early Hints HTTP information response status code for preloading resources that the page may need while the server prepares the full response.</p>
                <p className="mt-3">There's a lot of good stuff in the Safari 17.4 beta. For CSS there is support for @scope, align-content on block containers and table cells, and for the ::grammar-error and ::spelling-error pseudo-elements, plus much more.</p>
                <p className="mt-3">{'In forms, support for vertical writing mode in form controls, the showPicker() method for <input type="date">, and support for <hr> inside <select> on iOS.'}</p>
                <p className="mt-3">JavaScript also gets some new features with support for the detached(), transfer() and transferToFixedLength() methods of ArrayBuffer among other things.</p>
                <p className="mt-3">Chrome 122 beta includes an unsanitized option in the read() method of the Async Clipboard API to retrieve unsanitized HTML format. For JavaScript there are new iterator helpers, and new methods for the built-in Set class.</p>
                <p className="mt-3">Also in Chrome 122 is the Storage Buckets API which aims to make persistent storage eviction under heavy memory pressure more predictable.</p>
            </>
        )
    },
    {
        id: 4,
        author: 'Matthias Rohmer',
        authorImage: '/assets/images/blog/authors/mrohmer.jpg',
        authorBio: 'Matthias is a natural problem-solver and effective communicator. He thrives on challenges, approaching each project with a blend of creativity and pragmatism to find the best possible solutions.',
        category: 'Backend',
        title: 'Introducing Learn Testing',
        image: '/assets/images/blog/extra-blogs/blog-4.jpg',
        heading: 'Today we are excited to announce the most recent addition to our course series! Learn Testing is a brand-new course written by Sam Thorogood, a former startup CTO and ex-Google engineer who understands the challenges of building robust applications. The new course will teach you everything you need to know about testing web applications, with focus on test automation. You will learn about the various test types, testing environments, what is actually worth testing, up to writing your own component tests.',
        tags: ['Testing'],
        content: (
            <>
                <p className="mt-3">Today we are excited to announce the most recent addition to our course series! Learn Testing is a brand-new course written by Sam Thorogood, a former startup CTO and ex-Google engineer who understands the challenges of building robust applications. The new course will teach you everything you need to know about testing web applications, with focus on test automation. You will learn about the various test types, testing environments, what is actually worth testing, up to writing your own component tests.</p>
                <p className="mt-3">Research has shown, developers still spend a lot of their time running manual tests. Often because setting up proper tests is seen as cumbersome and difficult. But in most cases, writing tests is worth the effort and can save you time in the long run! With the launch of the first chapters of this new course and the ones following over the next couple of months, we hope to encourage more developers to take the plunge and start adding tests to their projects.</p>
                <p className="mt-3">As with all the other courses on web.dev, like Learn HTML, Learn Performance, or Learn Accessibility you don't need to work through the course chapter by chapter. It also neatly works as a reference that you can share with your colleagues whenever you touch on testing.</p>
                <p className="mt-3">As soon as you are ready, feel free to dive into Learn Testing! Let us know what you think and what you are looking for in upcoming chapters, either by filing an issue or by posting at us on X with @ChromiumDev.</p>
            </>
        )
    }
]