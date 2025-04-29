// --- Quiz Data ---
// Moved back into the main script file
const allQuestions = [
    {
        "question": "1. What is the primary advantage of using `val` over `var` in Kotlin?",
        "options": ["Better performance", "Enforces immutability, leading to safer code", "Required for non-nullable types", "Allows type inference"],
        "answer": "Enforces immutability, leading to safer code",
        "explanation": "`val` بتعمل متغير قيمته مينفعش تتغير بعد ما تحددها أول مرة (immutable). ده بيخلي الكود آمن أكتر وبيقلل الأخطاء اللي ممكن تحصل بسبب تغيير القيمة بالغلط. `var` عكسها، قيمتها ممكن تتغير.",
        "isFavorite": false
    },
    {
        "question": "2. Which Kotlin keyword is used to declare a class that primarily holds data?",
        "options": ["class", "object", "data class", "struct"],
        "answer": "data class",
        "explanation": "`data class` في كوتلن بتديك مميزات جاهزة للكلاسات اللي هدفها الأساسي تخزين بيانات، زي `equals()`, `hashCode()`, `toString()`, و `copy()`. بتوفر عليك كتابة الكود ده بنفسك.",
        "isFavorite": false
    },
    {
        "question": "3. How does Kotlin handle null safety compared to Java?",
        "options": ["Kotlin has no concept of null.", "Kotlin types are non-nullable by default, requiring explicit marking (`?`) for nullable types.", "Kotlin automatically throws `NullPointerException` whenever a null is encountered.", "Null safety is identical in both Kotlin and Java."],
        "answer": "Kotlin types are non-nullable by default, requiring explicit marking (`?`) for nullable types.",
        "explanation": "كوتلن مصممة عشان تتجنب أخطاء الـ `NullPointerException` المشهورة في جافا. عشان كده، أي متغير في كوتلن هو مفترض إنه مش بيقبل `null` إلا لو أنت حطيت علامة استفهام (`?`) بعد النوع بتاعه، وده بيجبرك تتعامل مع احتمالية الـ `null` بشكل آمن.",
        "isFavorite": false
    },
    {
        "question": "4. What is the purpose of the `lateinit` keyword in Kotlin?",
        "options": ["To declare a variable that will be initialized asynchronously.", "To declare a non-nullable variable that will be initialized later, before its first use.", "To declare a nullable variable.", "To create a singleton object."],
        "answer": "To declare a non-nullable variable that will be initialized later, before its first use.",
        "explanation": "`lateinit` بتسمحلك تعرف متغير من نوع non-nullable (مينفعش يبقى null) بس من غير ما تديله قيمة أولية في وقت التعريف. أنت كأنك بتوعد الكومبايلر إنك هتديله قيمة قبل ما تستخدمه لأول مرة. ده مفيد في حالات زي الـ Dependency Injection أو في `onCreate` بتاعة الـ Activity/Fragment.",
        "isFavorite": false
    },
    {
        "question": "5. What does the `!!` operator do in Kotlin?",
        "options": ["Asserts that a nullable variable is not null, throwing a `NullPointerException` if it is.", "Provides a default value if the variable is null.", "Safely calls a method on a nullable variable.", "Performs a boolean negation."],
        "answer": "Asserts that a nullable variable is not null, throwing a `NullPointerException` if it is.",
        "explanation": "علامتين التعجب (`!!`) دي طريقة تقول بيها لكوتلن \"أنا متأكد 100% إن المتغير ده مش `null` دلوقتي\". لو طلع `null` فعلاً، هيحصل `KotlinNullPointerException`. المفروض تستخدمها بحذر شديد أو تتجنبها لو ممكن تستخدم طرق آمنة زي `?.` أو `?:`.",
        "isFavorite": false
    },
    {
        "question": "6. What is an Extension Function in Kotlin?",
        "options": ["A function defined inside another function.", "A way to add new functions to existing classes without inheriting from them.", "A function that overrides a superclass method.", "A function marked with the `extend` keyword."],
        "answer": "A way to add new functions to existing classes without inheriting from them.",
        "explanation": "الـ Extension Functions بتسمحلك تضيف ميثود (وظيفة) جديدة لكلاس موجود أصلاً (حتى لو مش أنت اللي كاتبه، زي كلاسات الـ String أو الـ Context) من غير ما تحتاج تعدل الكلاس الأصلي أو تورث منه. دي ميزة قوية جداً في كوتلن بتخلي الكود أنضف وأسهل في القراءة.",
        "isFavorite": false
    },
    {
        "question": "7. In Java, what is the difference between checked and unchecked exceptions?",
        "options": ["Checked exceptions must be declared or caught; unchecked exceptions don't have this requirement.", "Unchecked exceptions must be declared or caught; checked exceptions don't.", "Checked exceptions occur at runtime; unchecked exceptions occur at compile time.", "There is no difference; it's just a naming convention."],
        "answer": "Checked exceptions must be declared or caught; unchecked exceptions don't have this requirement.",
        "explanation": "في جافا، الـ Checked Exceptions (زي `IOException`) الكومبايلر بيجبرك تتعامل معاها، يا إما تعملها `catch` أو تعلن إن الميثود بتاعتك ممكن ترميها (`throws`). الـ Unchecked Exceptions (زي `NullPointerException` أو `ArrayIndexOutOfBoundsException`) مش محتاج تعمل كده، وغالباً بتكون بسبب أخطاء برمجية. كوتلن مفيهاش المفهوم ده، كل الـ Exceptions تعتبر Unchecked.",
        "isFavorite": false
    },
    {
        "question": "8. What is the purpose of the `static` keyword in Java? (Conceptually relevant for Android, e.g., static methods/fields)",
        "options": ["It makes a variable immutable.", "It associates a method or variable with the class itself, rather than with an instance of the class.", "It indicates that a method can be called asynchronously.", "It automatically handles memory management for the variable."],
        "answer": "It associates a method or variable with the class itself, rather than with an instance of the class.",
        "explanation": "لما تعرف حاجة (متغير أو ميثود) كـ `static` في جافا، ده معناه إنها تبع الكلاس نفسه مش تبع object معين معمول من الكلاس ده. يعني تقدر توصلها عن طريق اسم الكلاس مباشرة (`ClassName.staticMember`) من غير ما تحتاج تعمل `new ClassName()`. ده ليه استخداماته بس لازم تاخد بالك منه عشان ممكن يسبب memory leaks في أندرويد لو استخدمته غلط (مثلاً تحتفظ بـ Context في متغير static).",
        "isFavorite": false
    },
    {
        "question": "9. What is the equivalent of Java's `static` members in Kotlin?",
        "options": ["`object` declarations or `companion object`", "`final` keyword", "`private` members", "`lateinit var`"],
        "answer": "`object` declarations or `companion object`",
        "explanation": "كوتلن مفيهاش كلمة `static` زي جافا. البديل عشان تعمل حاجة تبع الكلاس نفسه هو إنك تستخدم `companion object` جوه الكلاس. أي حاجة متعرفة جوه الـ `companion object` تقدر توصلها باسم الكلاس زي الـ `static` في جافا (`ClassName.companionMember`).",
        "isFavorite": false
    },
    {
        "question": "10. What is the difference between `==` and `===` in Kotlin?",
        "options": ["`==` checks for referential equality, `===` checks for structural equality.", "`==` checks for structural equality (uses `equals()`), `===` checks for referential equality (memory address).", "They are identical.", "`==` is used for primitives, `===` is used for objects."],
        "answer": "`==` checks for structural equality (uses `equals()`), `===` checks for referential equality (memory address).",
        "explanation": "في كوتلن، `==` بتقارن القيم (structural equality)، يعني بتنادي ميثود `equals()` عشان تشوف هل الـ objects متساويين في المحتوى. أما `===` بتقارن هل المتغيرين بيشاوروا على نفس المكان بالظبط في الميموري (referential equality).",
        "isFavorite": false
    },
    // Quiz 2 Starts (Q11-20)
    {
        "question": "11. Which lifecycle method is called when an Activity first comes into the foreground and becomes interactive?",
        "options": ["`onCreate()`", "`onStart()`", "`onResume()`", "`onVisible()`"],
        "answer": "`onResume()`",
        "explanation": "`onResume()` هي آخر مرحلة في عملية ظهور الـ Activity للمستخدم. بعد ما تتنادى، الـ Activity بتكون ظاهرة وتقدر تتفاعل معاها. `onCreate()` بتتنادى مرة واحدة لما الـ Activity تتخلق، و `onStart()` لما تبقى visible بس ممكن تكون مش في الـ foreground (مثلاً لو فيه dialog فوقيها).",
        "isFavorite": false
    },
    {
        "question": "12. What is the primary purpose of an `Intent` in Android?",
        "options": ["To store application data persistently.", "To describe an operation to be performed (e.g., start activity, send broadcast).", "To define the user interface layout.", "To handle background tasks."],
        "answer": "To describe an operation to be performed (e.g., start activity, send broadcast).",
        "explanation": "الـ `Intent` هو زي \"رسالة\" بتبعتها للأندرويد سيستم عشان تطلب منه يعمل حاجة. ممكن تكون عايز تفتح Activity تانية (explicit intent) أو تطلب من أي تطبيق يقدر يعمل مهمة معينة إنه يعملها، زي تفتح لينك أو تبعت ايميل (implicit intent)، أو تبعت رسالة لكل التطبيقات المهتمة بحاجة معينة (broadcast).",
        "isFavorite": false
    },
    {
        "question": "13. What is the difference between `Activity Context` and `Application Context`?",
        "options": ["They are identical and can always be used interchangeably.", "`Activity Context` is tied to the Activity lifecycle; `Application Context` is tied to the Application lifecycle.", "`Application Context` can be used for UI operations; `Activity Context` cannot.", "`Activity Context` has access to more system services."],
        "answer": "`Activity Context` is tied to the Activity lifecycle; `Application Context` is tied to the Application lifecycle.",
        "explanation": "الـ `Activity Context` مرتبط بدورة حياة الـ Activity اللي هو جاي منها، لو الـ Activity دي اتدمرت (مثلاً حصل rotation والجهاز عمل واحدة جديدة)، الـ Context ده ميبقاش صالح للاستخدام. أما `Application Context` فهو مرتبط بالتطبيق ككل وهيفضل موجود طول ما التطبيق شغال. القاعدة العامة: استخدم الـ `Activity Context` للحاجات اللي ليها علاقة بالـ UI أو بدورة حياة الـ Activity، واستخدم `Application Context` لأي حاجة محتاجة تعيش أطول من الـ Activity (زي الـ Singletons أو network calls). لو استخدمت `Activity Context` في مكان غلط ممكن يسبب Memory Leak.",
        "isFavorite": false
    },
    {
        "question": "14. What is the role of the `AndroidManifest.xml` file?",
        "options": ["To define the app's UI layouts.", "To store user preferences.", "To provide essential information about the app to the Android system (components, permissions, features).", "To write unit tests for the application."],
        "answer": "To provide essential information about the app to the Android system (components, permissions, features).",
        "explanation": "ملف الـ `AndroidManifest.xml` ده يعتبر زي بطاقة التعريف بتاعة التطبيق بتاعك بالنسبة للأندرويد سيستم. فيه معلومات أساسية زي اسم الباكج، الـ Activities والـ Services والـ Receivers اللي في التطبيق، الأذونات (Permissions) اللي التطبيق محتاجها، أقل نسخة أندرويد بيشتغل عليها، وغيرها من الإعدادات المهمة اللي السيستم بيحتاجها عشان يعرف يتعامل مع تطبيقك صح.",
        "isFavorite": false
    },
    {
        "question": "15. What pattern is commonly used by `RecyclerView` to improve performance by reusing views?",
        "options": ["Singleton Pattern", "Observer Pattern", "ViewHolder Pattern", "Factory Pattern"],
        "answer": "ViewHolder Pattern",
        "explanation": "الـ `RecyclerView` بتستخدم الـ `ViewHolder` pattern عشان تحسن الأداء جداً وهي بتعرض list طويلة. الفكرة إن بدل ما كل مرة عنصر جديد بيظهر على الشاشة يتعمله `findViewById` لكل الـ views اللي جواه (ودي عملية مكلفة)، الـ `ViewHolder` بيحتفظ بالـ references للـ views دي. ولما عنصر يخرج من الشاشة، الـ View بتاعه (مع الـ ViewHolder بتاعه) ممكن يتعاد استخدامه لعنصر جديد داخل الشاشة، فبيوفر عمليات الـ inflation والـ `findViewById`.",
        "isFavorite": false
    },
    {
        "question": "16. How do you request a permission that requires user approval at runtime (e.g., Camera)?",
        "options": ["Only declare it in `AndroidManifest.xml`.", "Use `ActivityCompat.requestPermissions()` or the Activity Result API.", "Permissions are granted automatically on install for all apps.", "Create a background service to handle permissions."],
        "answer": "Use `ActivityCompat.requestPermissions()` or the Activity Result API.",
        "explanation": "بداية من أندرويد 6.0 (Marshmallow)، الأذونات الخطيرة (زي الكاميرا، تحديد الموقع، الوصول للملفات) لازم تطلبها من المستخدم وقت التشغيل مش بس تعلن عنها في الـ Manifest. بتستخدم ميثود زي `requestPermissions()` أو الطريقة الأحدث والأفضل وهي الـ Activity Result APIs عشان تعرض الـ dialog للمستخدم وتستقبل رد المستخدم (وافق أو رفض).",
        "isFavorite": false
    },
    {
        "question": "17. Which component is best suited for performing long-running operations in the background, independent of the UI?",
        "options": ["`Activity`", "`Fragment`", "`Service` (especially with `WorkManager` or Foreground Service for critical tasks)", "`BroadcastReceiver`"],
        "answer": "`Service` (especially with `WorkManager` or Foreground Service for critical tasks)",
        "explanation": "الـ `Service` مصمم عشان يشتغل في الخلفية لوقت طويل نسبياً ومن غير واجهة مستخدم. لو المهمة دي مهمة جداً ومحتاج تضمن إن السيستم مش هيقتلها بسهولة، ممكن تستخدم `Foreground Service` (وده بيظهر notification للمستخدم). الطريقة الحديثة والمفضلة لإدارة المهام اللي في الخلفية (سواء مؤجلة أو لازم تتنفذ حتى لو النت فصل أو الجهاز عمل ريستارت) هي `WorkManager`.",
        "isFavorite": false
    },
    {
        "question": "18. What is a `Fragment` in Android?",
        "options": ["A standalone application component.", "A section of the user interface or behavior within an Activity.", "A lightweight thread for background tasks.", "A data storage mechanism."],
        "answer": "A section of the user interface or behavior within an Activity.",
        "explanation": "الـ `Fragment` بيمثل جزء من واجهة المستخدم أو سلوك معين جوه `Activity`. الـ Activity ممكن تحتوي على `Fragment` واحد أو أكتر. ده بيساعد في بناء واجهات مرنة أكتر (خصوصاً للشاشات المختلفة زي الموبايل والتابلت) وبيسهل إعادة استخدام أجزاء من الـ UI والـ logic المرتبط بيها. الـ Fragment ليه دورة حياة خاصة بيه بس مرتبطة بدورة حياة الـ Activity اللي هو فيها.",
        "isFavorite": false
    },
    {
        "question": "19. How can you save and restore UI state during configuration changes (like screen rotation)?",
        "options": ["Using static variables.", "Using `ViewModel` and `SavedStateHandle` (or `onSaveInstanceState`).", "Writing state to a file in `onPause()`.", "Using `SharedPreferences` for all UI state."],
        "answer": "Using `ViewModel` and `SavedStateHandle` (or `onSaveInstanceState`).",
        "explanation": "لما بيحصل configuration change زي دوران الشاشة، الأندرويد سيستم غالباً بيدمر الـ Activity وبيعمل واحدة جديدة. عشان تحافظ على بيانات الـ UI (زي اللي المستخدم دخله في `EditText`) وماتفقدهاش، الطريقة الحديثة والمفضلة هي استخدام `ViewModel`. الـ `ViewModel` بيعيش أطول من الـ Activity في حالة الـ configuration change، فبيحتفظ بالبيانات. عشان تحفظ الـ state حتى لو السيستم قتل الـ process بتاع التطبيق، بتستخدم `SavedStateHandle` مع الـ ViewModel أو الطريقة القديمة `onSaveInstanceState`.",
        "isFavorite": false
    },
    {
        "question": "20. What is the purpose of `setContentView()` in an Activity?",
        "options": ["To set the data source for the Activity.", "To inflate the XML layout file and set it as the Activity's UI.", "To start a background service.", "To register a `BroadcastReceiver`."],
        "answer": "To inflate the XML layout file and set it as the Activity's UI.",
        "explanation": "الميثود `setContentView()`، اللي عادةً بتناديها جوه `onCreate()`, هي اللي بتقول للـ Activity إيه هو ملف الـ XML اللي بيمثل التصميم (layout) بتاع الشاشة دي. هي بتاخد الـ ID بتاع ملف الـ layout (زي `R.layout.activity_main`)، تعمله inflation (تحوله لـ View objects في الميموري)، وتخليه هو الواجهة اللي المستخدم بيشوفها للـ Activity دي.",
        "isFavorite": false
    },
    // Quiz 3 Starts (Q21-30)
    {
        "question": "21. Why is it crucial to perform network operations or long database queries off the main thread in Android?",
        "options": ["To improve battery life.", "To prevent blocking the main thread, which causes Application Not Responding (ANR) errors.", "To make the code easier to read.", "The Android system requires all I/O operations to be on background threads by default."],
        "answer": "To prevent blocking the main thread, which causes Application Not Responding (ANR) errors.",
        "explanation": "الـ main thread (أو الـ UI thread) هو المسئول عن رسم الواجهة والاستجابة لتفاعلات المستخدم. لو عملت عملية بتاخد وقت طويل (زي تحميل حاجة من النت أو قراءة ملف كبير) على الـ main thread، هو هيتجمد ومش هيقدر يرسم الواجهة أو يستجيب للمس المستخدم. لو التجمد ده استمر لكام ثانية، الأندرويد سيستم هيعرض رسالة \"Application Not Responding\" (ANR) للمستخدم، ودي تجربة سيئة جداً. عشان كده، أي عملية ممكن تاخد وقت لازم تتعمل في background thread.",
        "isFavorite": false
    },
    {
        "question": "22. Which Kotlin feature is the modern and recommended way to handle asynchronous operations in Android?",
        "options": ["`AsyncTask`", "Java `Thread` with `Handler`", "`IntentService`", "Coroutines"],
        "answer": "Coroutines",
        "explanation": "الـ Coroutines هي الطريقة الحديثة والمفضلة في كوتلن (وبالتالي في أندرويد) للتعامل مع العمليات الـ asynchronous (اللي بتشتغل في الخلفية أو بتاخد وقت). هي أبسط وأقوى من الطرق القديمة زي `AsyncTask` (اللي بقت deprecated) أو التعامل المباشر مع الـ Threads والـ Handlers. الـ Coroutines بتخلي الكود الـ asynchronous يتكتب كأنه synchronous عادي، وده بيخليه أسهل في القراءة والفهم والصيانة.",
        "isFavorite": false
    },
    {
        "question": "23. In Kotlin Coroutines, what is the purpose of `Dispatchers.Main`?",
        "options": ["To run the coroutine on a background thread optimized for CPU-intensive work.", "To run the coroutine on a background thread optimized for I/O operations (network, disk).", "To run the coroutine on the Android main UI thread.", "To run the coroutine on a custom thread pool."],
        "answer": "To run the coroutine on the Android main UI thread.",
        "explanation": "الـ Dispatcher في الـ Coroutines بيحدد الـ thread أو الـ thread pool اللي الـ coroutine هيشتغل عليه. `Dispatchers.Main` بيخلي الكود اللي جوه الـ coroutine يشتغل على الـ main thread بتاع أندرويد. ده ضروري جداً لو أنت محتاج تعدل في الـ UI (زي تحديث `TextView` بنتيجة عملية تمت في الخلفية)، لأن تعديل الـ UI لازم يتم من الـ main thread فقط.",
        "isFavorite": false
    },
    {
        "question": "24. What does the `suspend` keyword signify in a Kotlin function?",
        "options": ["The function will run on a background thread automatically.", "The function can be paused and resumed later, allowing it to perform long-running operations without blocking the thread.", "The function returns a `Deferred` value.", "The function can only be called from the main thread."],
        "answer": "The function can be paused and resumed later, allowing it to perform long-running operations without blocking the thread.",
        "explanation": "كلمة `suspend` قبل تعريف فانكشن في كوتلن معناها إن الفانكشن دي ممكن \"تتوقف مؤقتاً\" (suspend) في نص تنفيذها (مثلاً وهي مستنية رد من الشبكة) من غير ما تعمل block للـ thread اللي هي شغالة عليه. ولما العملية اللي كانت مستنياها تخلص، الفانكشن ممكن \"تستأنف\" (resume) شغلها من نفس النقطة. الـ `suspend` functions تقدر تنادي `suspend` functions تانية، ولازم تتنادى من جوه coroutine أو من `suspend` function تانية.",
        "isFavorite": false
    },
    {
        "question": "25. How do you switch a Kotlin Coroutine from a background thread (`Dispatchers.IO`) to the main thread (`Dispatchers.Main`) to update the UI?",
        "options": ["By calling `Thread.sleep()`.", "It happens automatically.", "Using `withContext(Dispatchers.Main) { ... }`.", "By launching a new coroutine on `Dispatchers.Main`."],
        "answer": "Using `withContext(Dispatchers.Main) { ... }`.",
        "explanation": "لو أنت جوه coroutine شغال على background thread (زي `Dispatchers.IO` عشان تعمل network call) وعايز تحدث الـ UI بالنتيجة، لازم ترجع للـ main thread. الطريقة المباشرة والسهلة تعمل كده هي إنك تستخدم `withContext(Dispatchers.Main)`. الكود اللي هتكتبه جوه الـ block بتاع `withContext` هيتنفذ على الـ main thread، وبعد ما يخلص، الـ coroutine هيرجع يكمل على الـ thread الأصلي اللي كان عليه (لو فيه كود تاني بعد الـ block).",
        "isFavorite": false
    },
    {
        "question": "26. What was a common issue with `AsyncTask` that led to its deprecation?",
        "options": ["It couldn't perform network operations.", "It was difficult to handle configuration changes correctly, often leading to memory leaks or crashes.", "It could only run one task at a time globally.", "It didn't support progress updates."],
        "answer": "It was difficult to handle configuration changes correctly, often leading to memory leaks or crashes.",
        "explanation": "`AsyncTask` كانت طريقة شائعة زمان لعمليات الخلفية البسيطة، بس كان ليها مشاكل كتير. أشهرها إنها كانت مرتبطة بالـ Activity/Fragment اللي بدأتها. لو حصل configuration change (زي دوران الشاشة) والـ Activity اتدمرت وهي لسه شغالة، كان ممكن يحصل memory leak (لو الـ AsyncTask محتفظ بـ reference للـ Activity القديمة) أو crash لو حاولت تحدث الـ UI بتاع الـ Activity اللي اتدمرت. الـ Coroutines والـ ViewModels بيحلوا المشاكل دي بشكل أفضل.",
        "isFavorite": false
    },
    {
        "question": "27. What is the purpose of a `Handler` and `Looper` in Android's threading model?",
        "options": ["To define the layout structure.", "To manage background thread pools efficiently.", "To allow communication between different threads, typically posting messages or Runnables to a specific thread's message queue (often the main thread).", "To store application preferences securely."],
        "answer": "To allow communication between different threads, typically posting messages or Runnables to a specific thread's message queue (often the main thread).",
        "explanation": "الـ `Looper` بيحافظ على إن الـ thread يفضل عايش وبيستقبل رسائل في queue (طابور رسائل). الـ `Handler` هو اللي بيربطك بالـ `Looper` بتاع thread معين (عادة الـ main thread) وبيسمحلك تبعتله رسائل أو قطع كود (Runnables) عشان تتنفذ على الـ thread ده. دي كانت الطريقة التقليدية عشان الـ background thread يبعت تحديثات للـ main thread عشان تعدل الـ UI. الـ Coroutines بتبسط الموضوع ده كتير.",
        "isFavorite": false
    },
    {
        "question": "28. What is a potential issue with creating many raw `Thread` objects in Android?",
        "options": ["They consume significant memory and resources, and managing their lifecycle can be complex.", "They cannot communicate with the main thread.", "They are limited to CPU-bound tasks only.", "Android limits the number of threads per app to 10."],
        "answer": "They consume significant memory and resources, and managing their lifecycle can be complex.",
        "explanation": "كل `Thread` بتعمله بيستهلك جزء من الميموري والـ CPU resources. لو عملت عدد كبير جداً منهم من غير إدارة كويسة، ده ممكن يأثر على أداء الجهاز ككل ويستهلك البطارية بسرعة. كمان، إدارة دورة حياتهم والتواصل بينهم ممكن يكون معقد ويؤدي لأخطاء. استخدام حاجات زي الـ Thread Pools (اللي بتديرها الـ Coroutine Dispatchers مثلاً) بيكون أكفأ بكتير لأنه بيعيد استخدام الـ threads بدل ما يخلق ويدمر threads جديدة طول الوقت.",
        "isFavorite": false
    },
    {
        "question": "29. In coroutines, what is the difference between `launch` and `async`?",
        "options": ["`launch` is for UI updates, `async` is for background tasks.", "`launch` starts a \"fire-and-forget\" coroutine (returns a `Job`), `async` starts a coroutine that computes a result (returns a `Deferred`).", "`async` is sequential, `launch` is parallel.", "`launch` requires a `suspend` function, `async` does not."],
        "answer": "`launch` starts a \"fire-and-forget\" coroutine (returns a `Job`), `async` starts a coroutine that computes a result (returns a `Deferred`).",
        "explanation": "الاتنين بيبدأوا coroutine جديد. الفرق الأساسي: `launch` بتستخدمه لما تكون عايز تنفذ كود في الخلفية ومش مستني منه نتيجة ترجعلك مباشرة (زي تحديث قاعدة بيانات). هو بيرجع object من نوع `Job` تقدر تستخدمه عشان تلغي الـ coroutine لو حبيت. أما `async` بتستخدمه لما تكون عايز تنفذ عملية في الخلفية ومستني منها نتيجة (زي عمل network call يجيب بيانات). هو بيرجع object من نوع `Deferred` (اللي هو يعتبر `Job` + نتيجة)، وتقدر تستخدم `await()` على الـ `Deferred` ده عشان تستنى النتيجة وتستخدمها.",
        "isFavorite": false
    },
    {
        "question": "30. What does ANR stand for in Android?",
        "options": ["Android Network Response", "Application Not Responding", "Android Native Runtime", "Application Needs Restart"],
        "answer": "Application Not Responding",
        "explanation": "ANR هي اختصار لـ Application Not Responding. دي الرسالة اللي الأندرويد بيظهرها للمستخدم لما التطبيق بتاعك يتجمد وميستجبش للمدخلات (زي اللمس) لفترة طويلة (عادة 5 ثواني للـ UI thread). السبب الأكثر شيوعاً هو إنك بتعمل عملية بتاخد وقت طويل على الـ Main Thread بدل ما تعملها في background thread.",
        "isFavorite": false
    },
    // Quiz 4 Starts (Q31-40)
    {
        "question": "31. You need to display a large list of items efficiently, loading more items as the user scrolls down. Which Android component and pattern would you primarily use?",
        "options": ["`ListView` with a custom adapter.", "`ScrollView` containing many `TextViews`.", "`RecyclerView` with pagination/infinite scrolling logic in the Adapter/ViewModel.", "`ViewPager` with a `FragmentStateAdapter`."],
        "answer": "`RecyclerView` with pagination/infinite scrolling logic in the Adapter/ViewModel.",
        "explanation": "`RecyclerView` هو الاختيار الأمثل لعرض القوائم الكبيرة بكفاءة بسبب استخدامه للـ ViewHolder pattern. عشان تحمل بيانات زيادة لما المستخدم يوصل لآخر الليستة (pagination أو infinite scrolling)، هتحتاج تضيف logic جوه الـ Adapter بتاعك أو (الأفضل) في الـ ViewModel عشان يعرف إمتى يطلب تحميل الصفحة التالية من البيانات ويعرضها.",
        "isFavorite": false
    },
    {
        "question": "32. Your app needs to perform a task reliably in the background, even if the app is closed or the device restarts. Which Android Jetpack library is designed for this?",
        "options": ["`ViewModel`", "`LiveData`", "`Room`", "`WorkManager`"],
        "answer": "`WorkManager`",
        "explanation": "`WorkManager` هي المكتبة المخصصة من Jetpack لإدارة وتنفيذ المهام اللي في الخلفية بشكل مضمون وموثوق. هي بتختار الطريقة الأنسب لتنفيذ المهمة (بناءً على نسخة الأندرويد وحالة الجهاز) وبتضمن إنها هتتنفذ حتى لو التطبيق اتقفل أو الجهاز عمل ريستارت (لو محدد كده). هي أفضل بكتير من استخدام `Service` مباشرة أو `AlarmManager` للمهام دي.",
        "isFavorite": false
    },
    {
        "question": "33. What is the core benefit of using Dependency Injection (DI) frameworks like Hilt or Koin?",
        "options": ["Reduces the final APK size.", "Improves runtime performance significantly.", "Makes code more modular, testable, and easier to manage by decoupling component creation from usage.", "Automatically generates UI layouts."],
        "answer": "Makes code more modular, testable, and easier to manage by decoupling component creation from usage.",
        "explanation": "الـ Dependency Injection (حقن الاعتماديات) هو مبدأ بيخلي الكلاسات بتاعتك متعتمدش على إنها تخلق الـ objects اللي هي محتاجاها بنفسها، بدل كده هي بتستقبل الـ objects دي من بره (بيتم \"حقنها\"). استخدام فريمووركس زي Hilt أو Koin بيسهل العملية دي جداً. الفايدة الأساسية هي إن الكود بيبقى decoupled (مفصول عن بعضه)، وده بيخليه أسهل في التعديل، وأسهل بكتير في كتابة الـ Unit Tests (لأنك ممكن تحقن dependencies مزيفة في الاختبارات)، وأسهل في الإدارة والصيانة بشكل عام.",
        "isFavorite": false
    },
    {
        "question": "34. Which architectural pattern separates concerns into Model (data), View (UI), and ViewModel (prepares data for UI, handles UI logic)?",
        "options": ["MVC (Model-View-Controller)", "MVP (Model-View-Presenter)", "MVVM (Model-View-ViewModel)", "Singleton Pattern"],
        "answer": "MVVM (Model-View-ViewModel)",
        "explanation": "نمط MVVM (Model-View-ViewModel) هو النمط المعماري اللي جوجل بتوصي بيه لتطبيقات أندرويد الحديثة. الـ Model بيمثل طبقة البيانات (network, database). الـ View هي الـ UI (Activity/Fragment). الـ ViewModel هو الوسيط اللي بياخد البيانات من الـ Model، يجهزها بالشكل المناسب للعرض، ويعرضها للـ View (عادة باستخدام `LiveData` أو `StateFlow`)، وكمان بيستقبل الأحداث من الـ View (زي ضغطات الزراير) وينفذ الـ logic المناسب. أهم ميزة فيه إنه بيخلي الـ ViewModel مستقل عن تفاصيل الـ View (زي الـ Context)، وبيعيش أطول من الـ View في حالة الـ configuration changes.",
        "isFavorite": false
    },
    {
        "question": "35. You need to ensure only one instance of a specific class (e.g., a Repository or API client) exists throughout your application. Which design pattern achieves this?",
        "options": ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Adapter Pattern"],
        "answer": "Singleton Pattern",
        "explanation": "الـ Singleton pattern هو نمط تصميم بيضمن إن الكلاس ده ميتعملش منه غير object واحد بس على مستوى التطبيق كله، وبيوفر طريقة سهلة عشان توصل للـ object الوحيد ده من أي مكان. ده مفيد لحاجات زي الـ Repositories اللي بتتعامل مع الداتا، أو الـ clients بتاعة الـ Networking libraries. في كوتلن، ممكن تعمل Singleton بسهولة باستخدام `object` declaration. لازم تستخدمه بحذر عشان ممكن يصعب الـ testing لو معملتوش صح.",
        "isFavorite": false
    },
    {
        "question": "36. If you have an operation that might fail (e.g., network request), how should you handle potential errors gracefully in Kotlin/Java?",
        "options": ["Let the app crash and rely on crash reporting tools.", "Ignore the errors.", "Use a `try-catch` block to handle potential exceptions and provide alternative logic or user feedback.", "Use assertions (`assert`)."],
        "answer": "Use a `try-catch` block to handle potential exceptions and provide alternative logic or user feedback.",
        "explanation": "لما تكون بتعمل عملية ممكن يحصل فيها خطأ غير متوقع (exception)، زي مشكلة في النت أو ملف مش موجود، لازم تتوقع الخطأ ده وتتعامل معاه. الطريقة الأساسية هي استخدام `try-catch` block. بتحط الكود اللي ممكن يرمي exception جوه الـ `try` block، ولو حصل exception من النوع اللي أنت متوقعه، الكود اللي جوه الـ `catch` block هيتنفذ، وهناك تقدر تسجل الخطأ، تظهر رسالة للمستخدم، أو تجرب حل بديل. ده بيمنع التطبيق من إنه يكراش وبيحسن تجربة المستخدم.",
        "isFavorite": false
    },
    {
        "question": "37. What is the concept of \"state\" in the context of Android UI development?",
        "options": ["The current lifecycle stage of an Activity (e.g., Resumed, Paused).", "Data that describes the current configuration of the UI (e.g., text in an input field, items in a list, whether a loading indicator is visible).", "The permissions granted to the application.", "The application's version code."],
        "answer": "Data that describes the current configuration of the UI (e.g., text in an input field, items in a list, whether a loading indicator is visible).",
        "explanation": "الـ \"State\" في سياق الـ UI هو أي معلومة أو بيان بيوصف شكل الواجهة عامل إزاي في لحظة معينة. ده ممكن يكون النص المكتوب في `EditText`, أو الليستة المعروضة في `RecyclerView`, أو هل زرار معين enabled ولا disabled, أو هل فيه علامة تحميل ظاهرة ولا لأ. إدارة الـ State دي بشكل كويس (مين بيحتفظ بالـ state، إزاي بتتغير، وإزاي الـ UI بيتعكس عليها) هو جزء أساسي من بناء تطبيقات أندرويد قوية ومستقرة، وده اللي الأنماط زي MVVM والـ libraries زي `LiveData`/`StateFlow` بتحاول تساعد فيه.",
        "isFavorite": false
    },
    {
        "question": "38. You want a background task to notify the UI thread about its progress. Which mechanism is suitable for this (considering modern practices)?",
        "options": ["Using static variables to share progress.", "Having the background thread directly update UI components. (Incorrect!)", "Using `LiveData` or `StateFlow` updated from a coroutine running on a background dispatcher, observed by the UI.", "Writing progress to `SharedPreferences`."],
        "answer": "Using `LiveData` or `StateFlow` updated from a coroutine running on a background dispatcher, observed by the UI.",
        "explanation": "الطريقة الحديثة والآمنة هي إنك تستخدم `LiveData` أو `StateFlow` جوه الـ `ViewModel`. الـ background task (مثلاً coroutine شغال على `Dispatchers.IO`) يقدر يحدث قيمة الـ `LiveData`/`StateFlow` دي بالـ progress الجديد. الـ Activity/Fragment بتكون بتراقب (observe) الـ `LiveData`/`StateFlow` ده. بما إن `LiveData`/`StateFlow` مصممة عشان تتعامل مع الـ lifecycle وبتوصل التحديثات على الـ main thread، الـ UI يقدر يستقبل الـ progress الجديد ويحدث نفسه بأمان.",
        "isFavorite": false
    },
    {
        "question": "39. What does the `final` keyword mean when applied to a class in Java?",
        "options": ["All methods in the class are implicitly `static`.", "The class cannot be subclassed (inherited from).", "The class can only have one instance (Singleton).", "The class fields must be initialized in the constructor."],
        "answer": "The class cannot be subclassed (inherited from).",
        "explanation": "لما تعرف كلاس في جافا كـ `final`، ده معناه إن مينفعش أي كلاس تاني يورث منه (يعمل `extends` للكلاس ده). ده بيستخدم عشان تضمن إن سلوك الكلاس ده مش هيتغير عن طريق الـ subclassing. في كوتلن، الكلاسات بتكون `final` باي ديفولت، ولازم تحط كلمة `open` لو عايز تسمح بالوراثة.",
        "isFavorite": false
    },
    {
        "question": "40. What is the purpose of ProGuard/R8 in the Android build process? (Relates conceptually to reverse engineering protection)",
        "options": ["To translate Kotlin code to Java code.", "To manage application dependencies.", "To shrink, obfuscate, and optimize the application code, making it smaller and harder to reverse engineer.", "To run automated UI tests."],
        "answer": "To shrink, obfuscate, and optimize the application code, making it smaller and harder to reverse engineer.",
        "explanation": "ProGuard (والبديل الأحدث R8) هي أدوات بتشتغل وقت الـ build بتاع التطبيق. ليها 3 وظايف أساسية: Shrinking (بتحذف الكود والـ resources اللي مش مستخدمة عشان تقلل حجم الـ APK)، Obfuscation (بتغير أسماء الكلاسات والميثودات والمتغيرات لأسماء قصيرة مالهاش معنى عشان تصعب على أي حد يعمل reverse engineering للكود بتاعك)، و Optimization (بتعمل تحسينات على الكود عشان يشتغل أسرع شوية).",
        "isFavorite": false
    },
    // Quiz 5 Starts (Q41-50)
    {
        "question": "41. What is Java Reflection?",
        "options": ["A way to visualize UI component hierarchy.", "The ability of code to inspect and manipulate itself (classes, methods, fields) at runtime.", "A tool for memory leak detection.", "A graphics rendering technique."],
        "answer": "The ability of code to inspect and manipulate itself (classes, methods, fields) at runtime.",
        "explanation": "الـ Reflection في جافا (وكوتلن بتستخدم الـ Java Reflection API) هي ميزة قوية بتخلي الكود بتاعك يقدر يفحص نفسه وهو شغال. يعني تقدر تعرف إيه هي الميثودات والمتغيرات اللي موجودة في كلاس معين، أو تغير صلاحية الوصول ليها (private/public)، أو حتى تنادي ميثود باسمها كـ String. هي قوية بس بطيئة نسبياً ولازم تستخدم بحذر شديد لأنها ممكن تكسر الـ type safety وبتصعب فهم الكود. بتستخدم ساعات في الـ libraries بتاعة الـ Serialization أو الـ Dependency Injection.",
        "isFavorite": false
    },
    {
        "question": "42. What is Polymorphism in Object-Oriented Programming?",
        "options": ["The ability to create only one instance of a class.", "The ability of an object to take on many forms; treating objects of different classes in a uniform way if they share a common superclass or interface.", "Hiding the internal implementation details of an object.", "Bundling data and methods that operate on the data within a single unit (class)."],
        "answer": "The ability of an object to take on many forms; treating objects of different classes in a uniform way if they share a common superclass or interface.",
        "explanation": "الـ Polymorphism (تعدد الأشكال) هو مبدأ أساسي في الـ OOP. معناه إنك تقدر تتعامل مع objects من كلاسات مختلفة كأنهم من نفس النوع، طالما هما بيورثوا من نفس الـ superclass أو بيطبقوا نفس الـ interface. أبسط مثال في أندرويد: ممكن يكون عندك `List<View>` فيها `TextView` و `ImageView` و `Button`. كلهم `View` في الأصل، وتقدر تتعامل معاهم كلهم كـ `View` بشكل عام، رغم إن كل واحد ليه شكله وسلوكه الخاص.",
        "isFavorite": false
    },
    {
        "question": "43. What is the purpose of the `@JvmOverloads` annotation in Kotlin?",
        "options": ["To specify the JVM version compatibility.", "To allow calling Kotlin functions with default parameter values from Java code as if they were overloaded methods.", "To mark a function for ProGuard/R8 to keep.", "To indicate a function overrides a Java method."],
        "answer": "To allow calling Kotlin functions with default parameter values from Java code as if they were overloaded methods.",
        "explanation": "كوتلن بتسمحلك تحدد قيم افتراضية للـ parameters بتاعة الفانكشنز. جافا معندهاش الميزة دي بنفس الشكل، وعشان كده بتعتمد على الـ overloading (إنك تعمل كذا فانكشن بنفس الاسم بس بـ parameters مختلفة). لو أنت عندك فانكشن كوتلن بـ default parameters وعايز تخليها سهلة الاستخدام من كود جافا، بتحط عليها annotation اسمه `@JvmOverloads`. ده بيخلي الكومبايلر بتاع كوتلن يعمل generate لـ versions تانية من الفانكشن دي (overloads) مناسبة عشان تتنادى من جافا.",
        "isFavorite": false
    },
    {
        "question": "44. Consider a `ViewModel`. Should it hold a direct reference to an `Activity` or `Fragment` (Context)? Why or why not?",
        "options": ["Yes, it's necessary for accessing resources.", "Yes, but only if it's the Application Context.", "No, because the `ViewModel` outlives the `Activity`/`Fragment` during configuration changes, holding a reference would cause a memory leak.", "It doesn't matter as the Garbage Collector handles it."],
        "answer": "No, because the `ViewModel` outlives the `Activity`/`Fragment` during configuration changes, holding a reference would cause a memory leak.",
        "explanation": "لأ، مينفعش الـ `ViewModel` يحتفظ بـ reference مباشر للـ `Activity` أو `Fragment` أو الـ `Context` بتاعهم. السبب إن الـ `ViewModel` مصمم إنه يعيش أطول من الـ Activity/Fragment في حالة الـ configuration change (زي دوران الشاشة). لو الـ `ViewModel` فضل ماسك reference للـ Activity القديمة اللي المفروض تتشال من الميموري، ده هيمنع الـ Garbage Collector إنه يشيلها، وده هيسبب Memory Leak. لو محتاج `Context` جوه الـ `ViewModel` (وده المفروض تتجنبه قدر الإمكان)، استخدم `Application Context` اللي بتحصل عليه عن طريق الوراثة من `AndroidViewModel`.",
        "isFavorite": false
    },
    {
        "question": "45. What is the primary difference between `==` in Java for objects and `equals()` method?",
        "options": ["No difference, they are synonyms.", "`==` compares memory addresses (referential equality); `equals()` is intended to compare object contents (structural equality, but needs correct implementation).", "`equals()` compares memory addresses; `==` compares object contents.", "`==` is faster than `equals()`."],
        "answer": "`==` compares memory addresses (referential equality); `equals()` is intended to compare object contents (structural equality, but needs correct implementation).",
        "explanation": "في جافا، لما تستخدم `==` عشان تقارن بين اتنين objects (مش primitive types زي int)، هو بيشوف هل المتغيرين دول بيشاوروا على نفس المكان بالظبط في الميموري ولا لأ (referential equality). أما ميثود `equals()`، فالهدف منها إنها تقارن محتوى الـ objects نفسها (structural equality). بس لازم تاخد بالك إن الـ default implementation بتاعة `equals()` اللي جاية من كلاس `Object` بتعمل نفس اللي بيعمله `==`. عشان `equals()` تقارن المحتوى صح، لازم تعملها override جوه الكلاس بتاعك وتكتب الـ logic بتاع المقارنة بنفسك (زي ما الـ data classes في كوتلن بتعملهالك جاهز).",
        "isFavorite": false
    },
    {
        "question": "46. What is Encapsulation in OOP?",
        "options": ["Allowing objects of different classes to be treated uniformly.", "Hiding the internal state and implementation details of an object and exposing controlled access through methods (getters/setters).", "Creating new classes based on existing classes.", "Ensuring a class has only one instance."],
        "answer": "Hiding the internal state and implementation details of an object and exposing controlled access through methods (getters/setters).",
        "explanation": "الـ Encapsulation (التغليف) هو مبدأ في الـ OOP معناه إنك تخبي التفاصيل الداخلية بتاعة الكلاس (زي المتغيرات الخاصة بيه) عن العالم الخارجي، وتوفر طرق محددة ومتحكم فيها (public methods زي getters و setters) عشان تتعامل مع الحالة الداخلية دي. ده بيحمي البيانات من التعديل العشوائي وبيخلي الكلاس أسهل في الصيانة والتطوير لأنك ممكن تغير التفاصيل الداخلية من غير ما تأثر على الكود اللي بيستخدم الكلاس ده طالما الـ public interface فضل زي ما هو.",
        "isFavorite": false
    },
    {
        "question": "47. You observe that your app becomes unresponsive for a few seconds after clicking a button that fetches data from the network. What is the MOST likely cause?",
        "options": ["The network connection is slow.", "The data being fetched is very large.", "The network request is being performed on the Main/UI thread.", "There is a memory leak in the application."],
        "answer": "The network request is being performed on the Main/UI thread.",
        "explanation": "أشهر سبب لإن التطبيق يتجمد (يبقى unresponsive) بعد ضغطة زرار بتعمل عملية بتاخد وقت (زي network request) هو إن العملية دي بتتعمل على الـ Main Thread. الـ Main Thread هو المسئول عن الـ UI، فلما يكون مشغول بعملية طويلة، مش بيقدر يستجيب لأي حاجة تانية وبيحصل الـ freeze أو الـ ANR. الحل دايماً هو نقل العمليات الطويلة دي لـ background thread (باستخدام Coroutines مثلاً).",
        "isFavorite": false
    },
    {
        "question": "48. What is the role of `build.gradle` files in an Android project?",
        "options": ["To define UI layouts.", "To declare app components like Activities and Services.", "To configure the build process, including dependencies, SDK versions, signing configurations, and build variants.", "To store raw assets like images and sounds."],
        "answer": "To configure the build process, including dependencies, SDK versions, signing configurations, and build variants.",
        "explanation": "ملفات الـ `build.gradle` (عادة بيكون فيه واحد للمشروع ككل وواحد لكل موديول زي الـ `app` موديول) هي اللي بتستخدمها أداة الـ Build اللي اسمها Gradle عشان تعرف إزاي تبني التطبيق بتاعك. فيها بتحدد حاجات مهمة زي: الـ libraries اللي التطبيق بيعتمد عليها (dependencies)، أقل نسخة وأعلى نسخة SDK بيشتغل عليها التطبيق، إعدادات التوقيع الرقمي للـ release version، تعريف الـ build types (زي debug و release) والـ product flavors لو عندك نسخ مختلفة من التطبيق.",
        "isFavorite": false
    },
    {
        "question": "49. In Kotlin, what is a `sealed class` often used for?",
        "options": ["To prevent inheritance entirely.", "To represent restricted class hierarchies, often used for modeling states or results where all possible subtypes are known at compile time.", "To create singleton objects.", "To define utility functions."],
        "answer": "To represent restricted class hierarchies, often used for modeling states or results where all possible subtypes are known at compile time.",
        "explanation": "الـ `sealed class` في كوتلن شبه الـ enum شوية بس أقوى. هو بيسمحلك تعمل hierarchy (شجرة وراثة) محدودة، يعني كل الـ subclasses المباشرة بتاعته لازم تكون متعرفة في نفس الملف. ده مفيد جداً لما تكون عايز تمثل مجموعة حالات محددة ومقفولة، زي مثلاً حالات نتيجة عملية معينة (`Success(data)`, `Error(message)`, `Loading`). لما تستخدم `sealed class` مع `when` expression، الكومبايلر بيقدر يتأكد إنك غطيت كل الحالات الممكنة، وده بيخلي الكود آمن أكتر.",
        "isFavorite": false
    },
    {
        "question": "50. If an Activity is temporarily obscured by another Activity (e.g., a semi-transparent one or a dialog-themed Activity), which lifecycle state is the obscured Activity likely in?",
        "options": ["`onDestroy()`", "`onStop()`", "`onPause()`", "`onCreate()`"],
        "answer": "`onPause()`",
        "explanation": "لما Activity تفقد الـ focus بس تفضل لسه متشافة جزئياً (زي لو ظهر فوقيها dialog أو activity تانية شفافة)، السيستم بينادي ميثود `onPause()`. في الحالة دي الـ Activity مبقتش هي اللي في الـ foreground ومبتقدرش تتفاعل معاها، بس لسه ظاهرة. لو الـ Activity اختفت تماماً عن الشاشة (مثلاً فتحت Activity جديدة فوقيها غطتها بالكامل)، ساعتها السيستم هينادي `onStop()` كمان بعد `onPause()`.",
        "isFavorite": false
    }
    ,{
        "question": "51. In the context of Android's Binder IPC, what is the primary role of `onTransact()` and how does it differ from using AIDL generated stubs?",
        "options": [
            "It serializes data; AIDL handles deserialization.",
            "It runs on the client process; AIDL runs on the service process.",
            "It's the low-level entry point for receiving transaction codes and raw Binder data, requiring manual dispatching and marshalling/unmarshalling, whereas AIDL abstracts this.",
            "It handles synchronous calls only; AIDL handles asynchronous calls."
        ],
        "answer": "It's the low-level entry point for receiving transaction codes and raw Binder data, requiring manual dispatching and marshalling/unmarshalling, whereas AIDL abstracts this.",
        "explanation": "`onTransact` ده الميثود الأساسية في الـ `Binder` اللي بتستقبل كل الـ transactions اللي جاية من process تانية. بتستقبل كود العملية (عشان تعرف أنهي ميثود تتنادى) وبتاخد الـ data كـ `Parcel` خام. أنت المسئول عن قراية الـ data دي وتحديد أنهي ميثود تناديها وترجع الـ result. الـ AIDL بيعمل generate لكل الكود المعقد ده (الـ stub والـ proxy) وبيخليك تتعامل معاه كأنك بتنادي ميثود عادية، فبيسهل العملية جداً."
    },
    {
        "question": "52. When optimizing app startup, what is the significance of the Zygote process preloading classes and resources?",
        "options": [
            "It reduces APK size by sharing common code.",
            "It allows apps to bypass permission checks during startup.",
            "It drastically speeds up cold starts by creating new app processes as forks of an already initialized VM with system classes loaded, enabling Copy-on-Write memory sharing.",
            "It isolates each app's memory heap completely from the system."
        ],
        "answer": "It drastically speeds up cold starts by creating new app processes as forks of an already initialized VM with system classes loaded, enabling Copy-on-Write memory sharing.",
        "explanation": "الـ Zygote هو process أندرويد بيبدأ أول ما الجهاز يفتح وبيحمل كل الكلاسات والـ resources الأساسية بتاعة السيستم جوه الـ VM بتاعته. لما تيجي تفتح تطبيق جديد (cold start)، الأندرويد سيستم مش بيبدأ process جديدة من الصفر، لأ، هو بيعمل fork (نسخة) من الـ Zygote process. ده أسرع بكتير لأن الكلاسات الأساسية جاهزة، والـ memory pages اللي فيها الكود والـ resources دي بيحصلها sharing بين كل الـ apps عن طريق الـ Copy-on-Write (CoW)، فبيوفر memory ووقت."
    },
    {
        "question": "53. In Jetpack Compose, what does it mean for a Composable function's parameter type to be 'Stable' and why is it crucial for performance?",
        "options": [
            "The type is declared with `val`.",
            "The type implements the `Parcelable` interface.",
            "The type guarantees that if an instance's public properties haven't changed, the instance is considered identical, allowing Compose to reliably skip recomposition if the input instance hasn't changed.",
            "The type can only be used within `@StableComposable` functions."
        ],
        "answer": "The type guarantees that if an instance's public properties haven't changed, the instance is considered identical, allowing Compose to reliably skip recomposition if the input instance hasn't changed.",
        "explanation": "في Compose، الـ Stability هي ضمان من الـ type إن لو public properties بتاعة object منه متغيرةش، يبقى الـ object ده لسه زي ما هو (يعني `equals` هترجع true). الـ Compose compiler بيستخدم المعلومة دي عشان يعمل optimization. لو فانكشن بتاخد parameter من نوع stable، والـ instance اللي داخلة المرة دي هي هي نفس instance اللي دخلت المرة اللي فاتت (أو `equals` بترجع true)، الكومبايلر يقدر يعمل skip للـ recomposition بتاع الفانكشن دي وأي فانكشن جواها، وده بيحسن الأداء جداً. الأنواع الـ Primitive والـ String والـ functional types مستقرة باي ديفولت. الكلاسات اللي كل الـ parameters بتاعتها primitive أو stable بتكون stable. ممكن تستخدم `@Stable` أو `@Immutable` annotation لو الكومبايلر معرفش يحدد الـ stability لوحده."
    },
    {
        "question": "54. How does `SharedFlow` handle backpressure compared to `Channel` in Kotlin Coroutines?",
        "options": [
            "`SharedFlow` suspends the emitter, while `Channel` drops old values.",
            "`SharedFlow` has built-in buffering strategies (e.g., `DROP_OLDEST`, `SUSPEND`) configured via `replay`, `buffer`, or `onBufferOverflow`, while `Channel` behavior depends on its specific type (e.g., `CONFLATED`, `RENDEZVOUS`).",
            "`Channel` always buffers infinitely, while `SharedFlow` has a fixed buffer size.",
            "Neither `SharedFlow` nor `Channel` supports backpressure."
        ],
        "answer": "`SharedFlow` has built-in buffering strategies (e.g., `DROP_OLDEST`, `SUSPEND`) configured via `replay`, `buffer`, or `onBufferOverflow`, while `Channel` behavior depends on its specific type (e.g., `CONFLATED`, `RENDEZVOUS`).",
        "explanation": "الـ `SharedFlow` مصمم للـ broadcasting (واحد بيبعت ولكذا واحد بيستقبل). عشان يتعامل مع مستقبل بطيء (backpressure)، هو عنده استراتيجيات buffering تقدر تتحكم فيها زي إنه يحتفظ بآخر كام قيمة (`replay`), أو حجم الـ buffer (`buffer`), وإيه اللي يحصل لو الـ buffer اتملى (`onBufferOverflow` زي `DROP_OLDEST`, `DROP_LATEST`, `SUSPEND`). أما الـ `Channel`، سلوك الـ backpressure بيعتمد بشكل أساسي على نوع الـ Channel اللي بتعمله (مثلاً `RENDEZVOUS` بيخلي الـ sender يستنى الـ receiver، `CONFLATED` بيحتفظ بآخر قيمة بس، buffered channel ليه حجم معين ولو اتملى الـ sender بيعمل suspend)."
    },
    {
        "question": "55. What is the primary purpose of using Baseline Profiles in Android?",
        "options": [
            "To define UI layouts for different screen sizes.",
            "To provide ahead-of-time (AOT) compilation hints to ART for critical user journeys, improving startup time and reducing jank during first use after install/update.",
            "To enforce coding style guidelines across the project.",
            "To automatically generate unit tests for critical code paths."
        ],
        "answer": "To provide ahead-of-time (AOT) compilation hints to ART for critical user journeys, improving startup time and reducing jank during first use after install/update.",
        "explanation": "الـ Baseline Profiles دي عبارة عن ملف فيه ليستة بالكلاسات والميثودات اللي غالباً بتستخدم في رحلات المستخدم المهمة (Critical User Journeys - CUJs) زي فتح التطبيق أو الـ scrolling في ليستة مهمة. الملف ده بيتضمن في الـ APK وبيستخدمه الـ Android Runtime (ART) عشان يعمل Ahead-Of-Time (AOT) compilation للكود ده وقت تثبيت التطبيق أو في الخلفية. ده بيخلي الكود ده يشتغل أسرع من أول مرة، فبيحسن الـ startup time وبيقلل الـ jank (التقطيع) اللي ممكن يحصل بسبب الـ Just-In-Time (JIT) compilation في أول استخدام بعد التثبيت أو التحديث."
    },
    {
        "question": "56. In a multi-module Android project using Dagger/Hilt, how can you provide a specific implementation of an interface only within the scope of a particular feature module, while a default implementation exists in a core module?",
        "options": [
            "Using `@Named` qualifiers for both implementations.",
            "Using Hilt's `@TestInstallIn` to replace the binding.",
            "Defining the specific implementation in the feature module's Hilt module and ensuring the feature module's component is a child of the core component. Hilt's scope hierarchy naturally prefers the binding in the closer scope.",
            "It's not possible; module dependencies require a single canonical binding for an unscoped type."
        ],
        "answer": "Defining the specific implementation in the feature module's Hilt module and ensuring the feature module's component is a child of the core component. Hilt's scope hierarchy naturally prefers the binding in the closer scope.",
        "explanation": "في Hilt (ومبادئ Dagger)، الـ scopes بتعمل hierarchy. لو عندك interface مربوط بـ implementation معينة في موديول أساسي (مثلاً في الـ `SingletonComponent`)، وبعدين جيت في موديول بتاع feature معينة (ليه scope خاص بيه زي `@FeatureScope` مربوط بـ component تابعة للـ `SingletonComponent`) وعملت binding لنفس الـ interface ده بس بـ implementation تانية جوه الموديول ده، Hilt هيفضل الـ binding اللي في الـ scope الأقرب. يعني الكود اللي جوه الـ feature scope هياخد الـ implementation المخصصة ليه، بينما الكود اللي بره الـ feature scope هياخد الـ implementation الأساسية."
    },
    {
        "question": "57. What potential issue can arise from using `remember { mutableStateOf(...) }` directly within a frequently recomposing Composable for complex objects, and what is a better alternative?",
        "options": [
            "It causes memory leaks; use `produceState`.",
            "It bypasses Composition Locals; use `staticCompositionLocalOf`.",
            "It can lead to unnecessary object recreation on each recomposition if the initial calculation is expensive, potentially causing performance issues; use `rememberSaveable` or hoist the state creation.",
            "It breaks structured concurrency; use `LaunchedEffect`."
        ],
        "answer": "It can lead to unnecessary object recreation on each recomposition if the initial calculation is expensive, potentially causing performance issues; use `rememberSaveable` or hoist the state creation.",
        "explanation": "لو الجزء بتاع `mutableStateOf(...)` نفسه (اللي بيعمل create للـ initial state) مكلف (مثلاً بيعمل object معقد أو بيعمل عملية حسابية)، استخدام `remember { ... }` ممكن يؤدي لإن الـ state ده يتعاد حسابه أو الـ object يتعاد خلقه في كل مرة الـ composable بيحصلها recomposition حتى لو الـ state نفسه مش المفروض يتغير. ده ممكن يأثر على الأداء. الحلول الأفضل: 1) لو الـ state محتاج يبقى survive للـ configuration change أو process death، استخدم `rememberSaveable`. 2) لو لأ، ممكن تعمل hoisting للـ state creation، يعني تخلق الـ state في مستوى أعلى (parent composable) وتمرره كـ parameter، وده بيضمن إنه بيتعمل مرة واحدة بس في الـ scope الأعلى ده."
    },
    {
        "question": "58. When analyzing rendering performance using Android Studio's profiler or Systrace, what does a large portion of time spent in 'Sync & Upload' typically indicate?",
        "options": [
            "Heavy CPU computation on the main thread.",
            "Excessive network requests blocking the UI thread.",
            "The bitmap data for images or other assets is being uploaded to the GPU too frequently or inefficiently, often due to new bitmaps being created unnecessarily.",
            "Slow database query execution."
        ],
        "answer": "The bitmap data for images or other assets is being uploaded to the GPU too frequently or inefficiently, often due to new bitmaps being created unnecessarily.",
        "explanation": "مرحلة الـ 'Sync & Upload' في الـ rendering pipeline هي لما الـ CPU بيستنى الـ GPU يخلص شغل وبيبعتله الـ data الجديدة ( زي textures بتاعة الصور، بيانات الـ mesh، إلخ) اللي محتاجها عشان يرسم الـ frame الجاي. لو المرحلة دي بتاخد وقت طويل، ده غالباً معناه إن فيه كمية كبيرة من الـ bitmap data بتترفع للـ GPU memory. السبب الشائع بيكون إن التطبيق بيخلق `Bitmap` objects جديدة كتير (مثلاً في كل frame من animation أو جوا `onDraw` بتاع custom view) بدل ما يعيد استخدام الـ bitmaps الموجودة أو يرسم بكفاءة أكتر باستخدام الـ `Canvas` مباشرة لو ممكن."
    },
    {
        "question": "59. How does R8's 'optimization' step differ from its 'shrinking' and 'obfuscation' steps in the Android build process?",
        "options": [
            "Optimization removes unused code, shrinking renames classes/methods.",
            "Optimization rewrites code (e.g., inlining methods, removing dead code branches, class merging) to improve runtime performance or reduce size further, beyond just removing unused elements or renaming.",
            "Optimization only applies to Kotlin code, while shrinking applies to Java.",
            "Optimization focuses solely on reducing Dex file count for multidexing."
        ],
        "answer": "Optimization rewrites code (e.g., inlining methods, removing dead code branches, class merging) to improve runtime performance or reduce size further, beyond just removing unused elements or renaming.",
        "explanation": "الـ Shrinking بيشيل الكود والـ resources اللي مش مستخدمة خالص. الـ Obfuscation بيغير الأسماء عشان يصعب الـ reverse engineering ويقلل حجم الـ strings في الـ dex file. أما الـ Optimization، دي مرحلة أعمق بيعمل فيها R8 تحليل للكود وبيغير فيه عشان يحسنه. ده ممكن يشمل: عمل inline للميثودات القصيرة، إزالة أجزاء من الكود عمرها ما هتتنفذ (dead code elimination)، دمج كلاسات معينة، تعديل الـ control flow، وغيرها من التكنيكات اللي هدفها يا إما تقليل حجم الكود أكتر أو تحسين أداءه وقت التشغيل، بناءً على قواعد وتحليلات معقدة للكود bytecode."
    },
    {
        "question": "60. What is the primary difference in behavior between `StateFlow` and `LiveData` when the Android View consuming them goes to the background (STOPPED state)?",
        "options": [
            "`LiveData` stops emission completely, `StateFlow` continues emitting but drops intermediate values.",
            "`LiveData` continues emitting values but doesn't deliver them until the View is active again, while `StateFlow` collection stops if collected using `viewLifecycleOwner.repeatOnLifecycle(STARTED)` (or `CREATED`) and resumes on restart.",
            "`StateFlow` automatically saves its last value in `SavedStateHandle`, `LiveData` does not.",
            "Both stop emitting and lose the last value."
        ],
        "answer": "`LiveData` continues emitting values but doesn't deliver them until the View is active again, while `StateFlow` collection stops if collected using `viewLifecycleOwner.repeatOnLifecycle(STARTED)` (or `CREATED`) and resumes on restart.",
        "explanation": "الـ `LiveData` مصمم إنه يبقى lifecycle-aware. لو الـ observer بتاعه (عادة الـ View) دخل في حالة `STOPPED`، الـ `LiveData` نفسه ممكن يفضل يستقبل updates (لو فيه مصدر بيانات شغال في الخلفية)، لكنه مش هيوصل الـ updates دي للـ observer غير لما الـ observer يرجع لحالة `STARTED` أو `RESUMED`. أما `StateFlow` (ومعظم الـ Flows)، لو أنت بتعمل collect ليه بالطريقة الموصى بها باستخدام `viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED)`، الـ collection نفسها بتقف تماماً لما الـ lifecycle ينزل تحت `STARTED` (يعني يدخل `STOPPED`). ده بيوفر موارد لأنه بيوقف الـ downstream processing. لما الـ lifecycle يرجع لـ `STARTED` تاني، الـ collection بتبدأ من جديد وبتاخد آخر قيمة موجودة في الـ `StateFlow`."
    },
    {
        "question": "61. In the context of Android VSYNC and Choreographer, what problem does 'triple buffering' help mitigate?",
        "options": [
            "Screen tearing by synchronizing CPU, GPU, and display refresh.",
            "Input lag by processing touch events faster.",
            "Application Not Responding (ANR) errors during long UI updates.",
            "Jank caused by the CPU/GPU occasionally taking longer than one VSYNC interval (16.6ms for 60Hz) to prepare a frame, by allowing an extra buffer to hold a ready frame.",
        ],
        "answer": "Jank caused by the CPU/GPU occasionally taking longer than one VSYNC interval (16.6ms for 60Hz) to prepare a frame, by allowing an extra buffer to hold a ready frame.",
        "explanation": "الـ VSYNC بيعمل synchronize بين الـ CPU/GPU والـ display refresh rate. في الـ double buffering العادي، لو الـ CPU/GPU أخدوا وقت أطول من فترة VSYNC واحدة (16.6ms لشاشة 60Hz) عشان يجهزوا الـ frame الجاي، الـ display هيضطر يعرض الـ frame القديم مرة تانية، وده بيسبب jank (تنتيشة). الـ Triple buffering بيضيف buffer تالت. لو الـ buffer الأولاني بيتعرض والـ CPU/GPU بيجهزوا الـ frame في الـ buffer التاني وأخدوا وقت أطول شوية، يقدروا يكملوا شغلهم في الـ buffer التالت. لو خلصوا تجهيز frame في أي من الـ buffer التاني أو التالت قبل الـ VSYNC الجاي، الـ display يقدر ياخد frame جديد وميحصلش jank. هو بيسمح ببعض التأخير في تجهيز الـ frame من غير ما يأثر مباشرة على الـ smoothness."
    },
    {
        "question": "62. What is the purpose of the `key` parameter often used within Jetpack Compose loops (`forEach`, etc.) or with functions like `remember`?",
        "options": [
            "To provide a unique identifier for accessibility services.",
            "To encrypt the state associated with the Composable.",
            "To help Compose identify and preserve state or remember calculations across recompositions when the *position* of an item changes but its *identity* remains the same, preventing state loss or unnecessary recalculations.",
            "To specify the rendering layer type (Software/Hardware)."
        ],
        "answer": "To help Compose identify and preserve state or remember calculations across recompositions when the *position* of an item changes but its *identity* remains the same, preventing state loss or unnecessary recalculations.",
        "explanation": "لما Compose بتعمل recomposition لـ list مثلاً، لو ترتيب العناصر اتغير أو عنصر اتشال أو اتحط، Compose باي ديفولت بتعتمد على *ترتيب* الكود (positional memoization). ده معناه إن لو عنصر اتحرك من مكان لمكان، ممكن الـ state بتاعه يتفقد أو يتنسب لعنصر غلط. الـ `key` lambda بتسمحلك تدي لكل عنصر ID ثابت ومميز (مثلاً ID جاي من الداتا). لما تعمل كده، Compose بتقدر تتعرف على العنصر ده حتى لو مكانه اتغير في الـ list، وبالتالي بتحافظ على الـ state بتاعه (اللي معموله `remember`) أو بتمنع إعادة حسابات مرتبطة بيه كانت معمولة `remember(key) { ... }`."
    },
    {
        "question": "63. In ART (Android Runtime), how does Generational Garbage Collection generally work and why is it often more efficient than non-generational GC?",
        "options": [
            "It divides the heap into fixed-size blocks and collects only blocks with high fragmentation.",
            "It uses reference counting exclusively to collect objects as soon as they become unreachable.",
            "It divides the heap into generations (e.g., Young, Old) based on object age, collecting the Young generation (where most objects die quickly) more frequently and with less overhead than full heap collections.",
            "It runs the garbage collector on a separate, dedicated processor core."
        ],
        "answer": "It divides the heap into generations (e.g., Young, Old) based on object age, collecting the Young generation (where most objects die quickly) more frequently and with less overhead than full heap collections.",
        "explanation": "الفكرة الأساسية في الـ Generational GC هي فرضية إن معظم الـ objects اللي بتتخلق بتموت وهي لسه 'صغيرة' (short-lived). عشان كده، الـ heap بيتقسم لمناطق (generations)، أشهرها الـ Young Generation (اللي فيه الـ objects الجديدة) والـ Old Generation (اللي فيه الـ objects اللي عاشت فترة). الـ GC بيركز شغله على الـ Young Generation ويعمله collect بشكل متكرر أكتر. بما إن معظم الـ objects هنا بتموت بسرعة، العملية دي بتكون سريعة وبتحتاج توقف التطبيق (pause time) لفترة قصيرة جداً. الـ objects اللي بتعيش في الـ Young Generation بتتنقل للـ Old Generation. الـ Old Generation بيتعمله collect بشكل أقل تكراراً، لكن لما بيحصل بيكون أبطأ شوية. الطريقة دي عموماً أكفأ من إنك تعمل scan لكل الـ heap كل مرة."
    },
    {
        "question": "64. What is method inlining, as performed by compilers like R8 or ART's JIT/AOT, and what is its primary performance benefit?",
        "options": [
            "Replacing interface calls with direct class method calls.",
            "Removing unused methods from the final code.",
            "Replacing a call to a method with the actual code (body) of that method at the call site, reducing the overhead of the method call itself (stack manipulation, branching).",
            "Merging multiple similar methods into a single generic method."
        ],
        "answer": "Replacing a call to a method with the actual code (body) of that method at the call site, reducing the overhead of the method call itself (stack manipulation, branching).",
        "explanation": "الـ Method Inlining هو optimization تكنيك بيشيل الـ call لميثود معينة ويحط الكود بتاع الميثود دي مباشرة في المكان اللي كانت بتتنادى منه. ده بيوفر الـ overhead بتاع عملية استدعاء الميثود نفسها، اللي بتشمل حاجات زي تجهيز الـ stack frame، تمرير الـ parameters، والـ jump لعنوان الميثود والرجوع منه. لما الميثود بتكون صغيرة وبتتنادى كتير، الـ inlining ممكن يحسن الأداء بشكل ملحوظ. ده بيحصل يا إما وقت الـ compilation (زي R8 أو AOT بتاع ART) أو وقت التشغيل (JIT بتاع ART)."
    },
    {
        "question": "65. When using `ViewModel` with Saved State (`SavedStateHandle`), what types of data are generally safe to store directly in the `SavedStateHandle`?",
        "options": [
            "Any object, including complex custom classes and Context references.",
            "Only primitive types (Int, String, Boolean, etc.) and objects that implement `Parcelable` or `Serializable`, within reasonable size limits.",
            "Only immutable data types like Kotlin data classes.",
            "Only UI-related objects like Views or Drawables."
        ],
        "answer": "Only primitive types (Int, String, Boolean, etc.) and objects that implement `Parcelable` or `Serializable`, within reasonable size limits.",
        "explanation": "الـ `SavedStateHandle` بيعتمد على نفس الميكانيزم بتاع `onSaveInstanceState` عشان يحفظ الـ state بتاع الـ ViewModel في حالة الـ process death. الميكانيزم ده بيستخدم `Bundle` عشان يخزن الداتا. الـ `Bundle` مصمم عشان يخزن كميات صغيرة نسبياً من الداتا اللي ممكن يحصلها serialization بسهولة. ده بيشمل الـ primitive types الأساسية (int, float, boolean, string, إلخ)، والـ arrays بتاعتها، وأي object بيطبق `Parcelable` (ودي الطريقة المفضلة في أندرويد للـ serialization) أو `Serializable` (أبطأ وأقل كفاءة). تخزين objects كبيرة أو معقدة أو أي حاجة فيها reference للـ Context هنا ممكن يسبب مشاكل أداء أو `TransactionTooLargeException` أو memory leaks."
    },
    {
        "question": "66. What is the role of `CompositionLocal` in Jetpack Compose and when might you prefer it over passing parameters explicitly down the tree?",
        "options": [
            "To manage background coroutine scopes for Composables.",
            "To provide data implicitly down the Composable tree without needing to pass it as a parameter through every intermediate function, useful for ambient data like themes or user preferences.",
            "To define custom layout behaviors for sibling Composables.",
            "To handle navigation state between different screens."
        ],
        "answer": "To provide data implicitly down the Composable tree without needing to pass it as a parameter through every intermediate function, useful for ambient data like themes or user preferences.",
        "explanation": "الـ `CompositionLocal` بيوفر طريقة عشان تمرر بيانات لتحت في الـ Composable tree من غير ما تحتاج تضيفها كـ parameter لكل فانكشن في النص. الفكرة إنك بتعمل 'provide' للقيمة في مستوى معين في الـ tree، وأي Composable تحت المستوى ده يقدر يوصل للقيمة دي مباشرة باستخدام `CompositionLocal.current`. ده مفيد جداً للحاجات اللي تعتبر 'ambient' أو موجودة في البيئة المحيطة زي الـ Theme (ألوان، خطوط)، أو الـ locale الحالي، أو بيانات المستخدم اللي عمل login. بيخلي الكود أنضف لأنه بيشيل الـ parameters دي من الفانكشنز اللي مش محتاجاها بشكل مباشر."
    },
    {
        "question": "67. What is 'Overdraw' in the context of Android UI rendering, and how can the 'Debug GPU Overdraw' developer option help identify it?",
        "options": [
            "Drawing outside the bounds of the screen.",
            "Rendering the same pixel multiple times in a single frame, wasting GPU cycles. Debug GPU Overdraw visualizes this by coloring pixels based on how many times they were drawn.",
            "Using too much GPU memory for textures.",
            "Drawing UI elements significantly larger than needed for the display density."
        ],
        "answer": "Rendering the same pixel multiple times in a single frame, wasting GPU cycles. Debug GPU Overdraw visualizes this by coloring pixels based on how many times they were drawn.",
        "explanation": "الـ Overdraw بيحصل لما السيستم بيرسم نفس البيكسل أكتر من مرة في نفس الـ frame الواحد. مثلاً، لو عندك خلفية بيضا، وفوقيها كارت أبيض، وفوقيه زرار أبيض، البيكسلات اللي تحت الزرار اترسمت 3 مرات. كل مرة زيادة دي استهلاك لموارد الـ GPU مالوش لازمة وممكن يبطئ الـ rendering خصوصاً في الأجهزة الضعيفة. الأداة بتاعة 'Debug GPU Overdraw' في الـ Developer Options بتلون الشاشة عشان توريك حجم الـ overdraw: اللون الأزرق يعني مرة واحدة (كويس)، الأخضر مرتين، الوردي 3 مرات، الأحمر 4 مرات أو أكتر (سيء جداً). هدفك تقلل الألوان الغامقة دي قدر الإمكان عن طريق تبسيط الـ layout، إزالة الخلفيات اللي مش ضرورية، استخدام `canvas.clipRect` صح في الـ custom views."
    },
    {
        "question": "68. In Kotlin Coroutines, what is `SupervisorJob` and how does its exception handling differ from a regular `Job`?",
        "options": [
            "`SupervisorJob` allows coroutines to run with elevated system privileges.",
            "`SupervisorJob` cancels all child coroutines as soon as the parent fails.",
            "`SupervisorJob` makes exceptions within a child coroutine fail *only* that specific child and its own children, without cancelling sibling coroutines or the supervisor itself. Regular `Job` cancels the entire scope on failure.",
            "`SupervisorJob` automatically retries failed coroutines."
        ],
        "answer": "`SupervisorJob` makes exceptions within a child coroutine fail *only* that specific child and its own children, without cancelling sibling coroutines or the supervisor itself. Regular `Job` cancels the entire scope on failure.",
        "explanation": "في الـ structured concurrency بتاع Coroutines، لو استخدمت `Job` عادي (اللي بيتعمل باي ديفولت مع `coroutineScope` أو `launch` على scope عادي)، أي exception مش بيتعمله catch جوه أي child coroutine بيعمل propagate لفوق وبيعمل cancel للـ parent `Job` وكل الـ children التانيين. أما لو استخدمت `SupervisorJob` (مثلاً عن طريق `supervisorScope` أو `CoroutineScope(SupervisorJob())`)، الفشل في child واحد مش بيأثر على الـ supervisor نفسه ولا على الـ children التانيين (siblings). يعني الـ exception بيكون localized للـ child اللي فشل بس. ده مفيد في السيناريوهات اللي عندك فيها كذا task مستقل شغالين في نفس الـ scope ومش عايز فشل واحد منهم يوقف الباقيين (زي مثلاً scope بتاع `ViewModel` بيشغل كذا عملية في الخلفية)."
    },
    {
        "question": "69. What is the purpose of the `invalidate()` method on an Android View, and how does it relate to `requestLayout()`?",
        "options": [
            "`invalidate()` triggers `onMeasure()`; `requestLayout()` triggers `onDraw()`.",
            "`invalidate()` forces the view to be garbage collected; `requestLayout()` rebuilds the layout hierarchy.",
            "`invalidate()` marks the view (or a portion of it) as needing to be redrawn (`onDraw()` will be called later), while `requestLayout()` indicates the view's bounds have changed and it needs to go through the measure and layout passes (`onMeasure()`, `onLayout()`) again.",
            "`invalidate()` redraws immediately; `requestLayout()` redraws on the next frame."
        ],
        "answer": "`invalidate()` marks the view (or a portion of it) as needing to be redrawn (`onDraw()` will be called later), while `requestLayout()` indicates the view's bounds have changed and it needs to go through the measure and layout passes (`onMeasure()`, `onLayout()`) again.",
        "explanation": "`invalidate()` بتقول للسيستم إن محتوى الـ View ده اتغير ومحتاج يترسم تاني. ده بيحط طلب في الـ queue والسيستم هينادي ميثود `onDraw()` بتاعة الـ View ده (وغالباً الـ parent بتاعه) في وقت لاحق (عادة في الـ VSYNC الجاي). أما `requestLayout()` فدي بتستخدم لما حجم أو أبعاد الـ View نفسه تتغير بشكل يخليه محتاج يعرف حجمه الجديد ويتحدد مكانه الجديد بالنسبة للـ parent بتاعه. ده بيخلي الـ View والـ hierarchy اللي فوقه يعدوا على مرحلتين تاني: `onMeasure` (عشان يحدد الأبعاد المطلوبة) و `onLayout` (عشان يحدد المكان والحجم الفعلي). نادراً ما تحتاج تنادي `requestLayout` إلا لو بتعمل custom view بيغير حجمه. `requestLayout` ضمنياً بتؤدي لـ `invalidate` في الآخر."
    },
    {
        "question": "70. What is Certificate Pinning in the context of Android network security?",
        "options": [
            "Encrypting network traffic using TLS certificates.",
            "Storing server certificates securely in the Android Keystore.",
            "Hardcoding or securely configuring the app to trust only specific, expected server certificates or public keys, preventing Man-in-the-Middle (MitM) attacks even if a system-trusted CA is compromised.",
            "Automatically rotating TLS certificates used by the application."
        ],
        "answer": "Hardcoding or securely configuring the app to trust only specific, expected server certificates or public keys, preventing Man-in-the-Middle (MitM) attacks even if a system-trusted CA is compromised.",
        "explanation": "عادة، التطبيق بيثق في أي certificate موقعة من Certificate Authority (CA) موجودة وموثوقة في السيستم. الـ Certificate Pinning هو إجراء أمان إضافي بيخلي التطبيق بتاعك يحدد بالظبط إيه هي الـ certificate (أو الـ public key بتاعتها) المسموح يتصل بيها لسيرفر معين. التطبيق بيرفض يتصل بالسيرفر لو الـ certificate اللي جاية منه مش مطابقة للي متسجلة عنده (pinned). ده بيحميك من هجمات Man-in-the-Middle (MitM) حتى لو الـ attacker قدر يحصل على certificate سليمة وموقعة من CA موثوقة (مثلاً لو الـ CA نفسها اتعرضت لاختراق)."
    },
    {
        "question": "71. In Jetpack Compose, what is `rememberUpdatedState` primarily used for?",
        "options": [
            "Remembering state across process death.",
            "Creating a state holder that automatically updates when the underlying data source changes.",
            "Capturing the most recent value of a parameter or state variable within a long-running lambda (like in `LaunchedEffect` or `DisposableEffect`) without causing the effect to restart when that value changes.",
            "Remembering the previous state value before the current recomposition."
        ],
        "answer": "Capturing the most recent value of a parameter or state variable within a long-running lambda (like in `LaunchedEffect` or `DisposableEffect`) without causing the effect to restart when that value changes.",
        "explanation": "الـ Side effects زي `LaunchedEffect` و `DisposableEffect` بيتعملها restart لو أي من الـ keys بتاعتها اتغيرت. ساعات بتبقى عايز الـ effect يفضل شغال، لكن جواه محتاج توصل لأحدث قيمة لـ state أو parameter ممكن تكون اتغيرت في recomposition حصلت والـ effect شغال. لو استخدمت الـ state/parameter ده مباشرة كـ key، الـ effect هيعمل restart. `rememberUpdatedState` بتحل المشكلة دي. هي بترجع `State` object بيحتوي دايماً على أحدث قيمة للـ variable اللي مررتها ليها، لكن الـ `State` object ده نفسه الـ reference بتاعه ثابت ومش بيعمل trigger للـ restart بتاع الـ effect. فتقدر تستخدم القيمة اللي جواه بأمان من غير ما تعمل restart للـ effect."
    },
    {
        "question": "72. What is the difference between `WRAP_CONTENT`, `MATCH_PARENT`, and `0dp` (match_constraint) when used for a dimension in Android's `ConstraintLayout`?",
        "options": [
            "`WRAP_CONTENT` uses measured size, `MATCH_PARENT` fills parent, `0dp` sets size to zero.",
            "`WRAP_CONTENT` is content size, `MATCH_PARENT` is deprecated (use `0dp` with constraints to edges), `0dp` means the size is determined entirely by the constraints applied to that dimension.",
            "`WRAP_CONTENT` uses constraints, `MATCH_PARENT` uses content size, `0dp` fills parent.",
            "They are functionally identical within a `ConstraintLayout`."
        ],
        "answer": "`WRAP_CONTENT` is content size, `MATCH_PARENT` is deprecated (use `0dp` with constraints to edges), `0dp` means the size is determined entirely by the constraints applied to that dimension.",
        "explanation": "في `ConstraintLayout`: `WRAP_CONTENT` بتخلي الـ view ياخد الحجم اللي محتاجه عشان يعرض المحتوى بتاعه بالظبط. `MATCH_PARENT` لا ينصح باستخدامها داخل `ConstraintLayout`؛ لو عايز الـ view يملى الـ parent، المفروض تستخدم `0dp` وتربط الـ constraints بتاعته (مثلاً الـ start والـ end) بالـ parent. `0dp` (أو `MATCH_CONSTRAINT`) هي القيمة الأساسية في `ConstraintLayout` ومعناها إن حجم الـ view في البُعد ده (width أو height) مش متحدد بقيمته هو ولا بالـ parent، لكن هيتم تحديده بالكامل عن طريق الـ constraints اللي أنت مطبقها عليه (زي المسافات للـ edges التانية، أو الـ percentage، أو الـ ratio)."
    },
    {
        "question": "73. How can using Kotlin's `inline class` (or `value class`) potentially impact runtime performance compared to using a regular class wrapper?",
        "options": [
            "Increases performance by enabling multi-threaded access.",
            "Decreases performance due to extra validation checks.",
            "Can improve performance by avoiding object allocation overhead for the wrapper class at runtime; the compiler often uses the underlying primitive type directly where possible.",
            "No significant performance difference."
        ],
        "answer": "Can improve performance by avoiding object allocation overhead for the wrapper class at runtime; the compiler often uses the underlying primitive type directly where possible.",
        "explanation": "الـ `inline class` (أو `value class` في النسخ الأحدث) بتسمحلك تعمل type safety wrapper حوالين نوع تاني (عادة primitive) من غير ما تضيف overhead بتاع object allocation وقت التشغيل. الكومبايلر بيحاول يتجنب عمل object للكلاس الـ inline ده وبيستخدم القيمة الأساسية اللي جواه مباشرة في الـ bytecode الناتج، إلا في حالات معينة زي لما تستخدمه كـ generic type أو nullable type. بالتالي، استخدامها ممكن يحسن الأداء، خصوصاً في الـ performance-critical code، عن طريق تقليل عدد الـ objects اللي بتتخلق والـ pressure على الـ Garbage Collector."
    },
    {
        "question": "74. What is the 'application id' in an Android `build.gradle` file, and how does it differ from the 'package name' declared in the `AndroidManifest.xml`?",
        "options": [
            "They are always the same; `applicationId` overrides the manifest `packageName`.",
            "`applicationId` is used only for testing; `packageName` is used for release builds.",
            "`applicationId` is the unique ID used by the Play Store and the device to identify the app and cannot be changed after publishing. `packageName` is used for R class generation and resolving relative Activity/Service names in the manifest and can technically differ (though discouraged).",
            "`packageName` determines the Play Store ID; `applicationId` determines the R class package."
        ],
        "answer": "`applicationId` is the unique ID used by the Play Store and the device to identify the app and cannot be changed after publishing. `packageName` is used for R class generation and resolving relative Activity/Service names in the manifest and can technically differ (though discouraged).",
        "explanation": "الـ `applicationId` اللي بتحدده في ملف `build.gradle` (عادة `app/build.gradle`) هو الاسم الفريد والنهائي للتطبيق بتاعك على جهاز المستخدم وفي Google Play Store. بمجرد ما تنشر التطبيق، مينفعش تغيره. أما الـ `packageName` اللي بتعلنه في أول ملف `AndroidManifest.xml`، فده بيستخدمه الـ build tools عشان تحدد الـ namespace بتاع كلاس `R` (اللي فيه الـ resource IDs) وعشان تعمل resolve لأسماء الـ components (Activities, Services, etc.) لو كتبتها بشكل relative جوه الـ Manifest. زمان كانوا لازم يكونوا زي بعض، لكن دلوقتي الـ build system بيسمح إنهم يكونوا مختلفين (عن طريق `applicationId` في gradle). بس الأفضل والممارسة الشائعة إنك تخليهم زي بعض إلا لو عندك سبب قوي جداً (زي تغيير اسم التطبيق مع الحفاظ على الـ ID القديم)."
    },
    {
        "question": "75. When implementing a custom `Layout` Composable in Jetpack Compose, what are the primary responsibilities of the `measure` and `layout` steps within the measure policy lambda?",
        "options": [
            "`measure` draws the children; `layout` positions them.",
            "`measure` calculates constraints; `layout` applies modifiers.",
            "`measure` asks each child measurable how much space it wants given certain constraints and determines the custom layout's own size; `layout` places each child placeable at specific coordinates within the custom layout.",
            "`measure` positions children; `layout` measures the parent."
        ],
        "answer": "`measure` asks each child measurable how much space it wants given certain constraints and determines the custom layout's own size; `layout` places each child placeable at specific coordinates within the custom layout.",
        "explanation": "لما تعمل custom layout في Compose، الـ measure policy lambda اللي بتمررها للـ `Layout` Composable ليها خطوتين أساسيتين: 1) الـ `measure` step: هنا بتاخد list بالـ `Measurable`s (children) والـ `Constraints` اللي جاية من الـ parent. مسئوليتك إنك تنادي `measure` على كل child (أو اللي محتاج تمجره) وتديله constraints مناسبة ليه عشان تعرف هو محتاج حجم قد إيه. بناءً على أحجام الـ children المطلوبة، بتقرر الحجم النهائي للـ custom layout بتاعك وترجعه عن طريق `layout(width, height) { ... }`. 2) الـ `layout` step (جوه الـ block بتاع `layout(width, height)`): هنا بتاخد نتيجة الـ measure step (اللي هي list بالـ `Placeable`s، كل واحد بالحجم اللي اتقاس بيه). مسئوليتك إنك تنادي `placeRelative(x, y)` أو `place(x, y)` على كل child عشان تحدد مكانه (إحداثياته) بالظبط جوه الـ custom layout بتاعك."
    },
    {
        "question": "76. What is Proguard/R8's `-keep` rule primarily used for, especially concerning reflection or JNI?",
        "options": [
            "To remove specific classes or methods from the final build.",
            "To prevent specified classes, methods, or fields from being removed (shrunk) or renamed (obfuscated) by R8, which is essential for code accessed via reflection, JNI, or serialization.",
            "To specify entry points for unit tests.",
            "To enable more aggressive code optimization rules."
        ],
        "answer": "To prevent specified classes, methods, or fields from being removed (shrunk) or renamed (obfuscated) by R8, which is essential for code accessed via reflection, JNI, or serialization.",
        "explanation": "لما R8 (أو Proguard) بيعمل shrinking و obfuscation، هو بيحلل الكود بتاعك عشان يشوف إيه اللي مستخدم وإيه اللي لأ، وبيغير الأسماء. لكن لو أنت بتوصل لكلاس أو ميثود أو فيلد عن طريق اسمه كـ String (زي في حالة الـ Reflection أو الـ JNI)، الـ R8 مش هيقدر يعرف إن الكود ده مستخدم وممكن يشيله أو يغير اسمه، وده يسبب crash وقت التشغيل. قاعدة `-keep` بتسمحلك تقول لـ R8 \"حافظ على الكلاس/الميثود/الفيلد ده بالاسم بتاعه زي ما هو ومتشيلهوش ومتغيرش اسمه\"، وده ضروري عشان تضمن إن الأجزاء دي هتفضل شغالة صح بعد عملية الـ build."
    },
    {
        "question": "77. How does the Android system typically handle memory pressure using Low Memory Killer (LMK)?",
        "options": [
            "It compresses unused memory pages using zRAM.",
            "It requests running apps to voluntarily release memory via `onTrimMemory()`.",
            "It kills background processes based on their priority (LRU cache order, process state, oom_adj score) to reclaim memory when system memory runs low.",
            "It moves less frequently used apps to swap storage on disk."
        ],
        "answer": "It kills background processes based on their priority (LRU cache order, process state, oom_adj score) to reclaim memory when system memory runs low.",
        "explanation": "الـ Low Memory Killer (LMK) هو ميكانيزم في الـ kernel بتاع أندرويد بيشتغل لما الميموري بتاعة السيستم بتقل عن حد معين (thresholds). وظيفته الأساسية إنه يقتل processes شغالة في الخلفية عشان يفضي memory للـ foreground app أو للسيستم نفسه. عملية الاختيار بتعتمد على أولويات الـ processes، اللي بتتحدد بناءً على كذا عامل أهمهم: ترتيبها في الـ LRU (Least Recently Used) cache (الـ process اللي المستخدم سابها من زمان ليها أولوية أقل)، حالتها (process فاضية ولا فيها service ولا UI)، وقيمة الـ `oom_adj_score` بتاعتها اللي السيستم بيظبطها. الـ process اللي ليها أقل أولوية (أعلى `oom_adj_score`) هي اللي بتتقفل الأول."
    },
    {
        "question": "78. What is the 'Recomposition Scope' in Jetpack Compose and how does modifying state within it typically trigger recomposition?",
        "options": [
            "The lifecycle scope of the hosting Activity/Fragment.",
            "A logical grouping of Composables defined by layout nodes. Modifying state invalidates the nearest enclosing scope, causing it and potentially its children to be re-evaluated.",
            "The CoroutineScope used for launching side effects.",
            "A specific region on the screen managed by the WindowManager."
        ],
        "answer": "A logical grouping of Composables defined by layout nodes. Modifying state invalidates the nearest enclosing scope, causing it and potentially its children to be re-evaluated.",
        "explanation": "الـ Compose compiler بيقسم الـ Composable tree بتاعك لوحدات منطقية اسمها Recomposition Scopes. الـ scope ده عادة بيكون مرتبط بـ Composable function بتقرا state معين. لما الـ `State` object ده قيمته بتتغير (يعني بتعمل set للـ `.value` بتاع `MutableState`)، الـ Compose runtime بيعمل invalidate لأقرب Recomposition Scope كان بيقرا الـ state ده. عملية الـ invalidation دي بتخلي الـ runtime يعيد استدعاء (recompose) الـ Composable function(s) اللي مرتبطة بالـ scope ده، وتبعاً لذلك ممكن الـ children بتاعتها كمان تتعملها recompose، إلا إذا كانت Compose تقدر تعمل skip ليهم بناءً على الـ stability بتاعة الـ inputs بتاعتهم."
    },
    {
        "question": "79. What problem does using `Modifier.then()` solve compared to simply chaining modifiers in Jetpack Compose (e.g., `Modifier.padding().background()` )?",
        "options": [
            "`then()` applies modifiers asynchronously.",
            "`then()` allows conditional application of a modifier chain based on a state, ensuring proper ordering and avoiding potential issues if the condition changes.",
            "`then()` optimizes the modifier chain by merging compatible modifiers.",
            "`then()` provides access to low-level drawing commands."
        ],
        "answer": "`then()` allows conditional application of a modifier chain based on a state, ensuring proper ordering and avoiding potential issues if the condition changes.",
        "explanation": "لو عايز تطبق Modifier أو مجموعة من الـ Modifiers بشكل شرطي ( بناءً على if statement مثلاً)، استخدام `then()` هو الطريقة الصح. لو حاولت تعمل كده عن طريق if/else جوه الـ chain العادي (`Modifier.padding(if (condition) 8.dp else 4.dp)`) ده ممكن ميشتغلش لكل الـ Modifiers أو يكون مش واضح. `Modifier.then(otherModifier)` بتضمن إن `otherModifier` هيتطبق *بعد* الـ Modifier اللي قبل الـ `then()`. فممكن تعمل: `Modifier.padding(8.dp).then(if (isSpecial) Modifier.background(Color.Red) else Modifier)` . هنا الـ background هيتطبق (أو لأ) *بعد* الـ padding، والترتيب ده مهم جداً لسلوك الـ Modifier."
    },
    {
        "question": "80. What is the main difference between Android's `SharedPreferences` and `EncryptedSharedPreferences`?",
        "options": [
            "`SharedPreferences` stores data in XML, `EncryptedSharedPreferences` uses JSON.",
            "`EncryptedSharedPreferences` is significantly faster due to hardware acceleration.",
            "`EncryptedSharedPreferences` automatically encrypts both keys and values using the Android Keystore system, providing secure storage for sensitive primitive data, while `SharedPreferences` stores data in plaintext XML.",
            "`SharedPreferences` is deprecated in favor of Jetpack DataStore."
        ],
        "answer": "`EncryptedSharedPreferences` automatically encrypts both keys and values using the Android Keystore system, providing secure storage for sensitive primitive data, while `SharedPreferences` stores data in plaintext XML.",
        "explanation": "الـ `SharedPreferences` العادية بتخزن الداتا (key-value pairs) في ملف XML في الـ private storage بتاع التطبيق، لكن الداتا دي بتكون plaintext (نص عادي). أي حد يقدر يوصل للملف ده (مثلاً على جهاز rooted) يقدر يقرا الداتا بسهولة. الـ `EncryptedSharedPreferences` (جزء من مكتبة Jetpack Security) بتوفر نفس الـ API بتاعة `SharedPreferences` لكنها بتعمل تشفير (encryption) للـ keys والـ values قبل ما تخزنهم في الملف، باستخدام master key بيتم إدارته بشكل آمن عن طريق الـ Android Keystore system. ده بيخليها مناسبة لتخزين بيانات حساسة زي tokens أو user settings معينة بشكل آمن."
    },
    {
        "question": "81. In Gradle, what is the 'Configuration Cache' and how does it improve build times compared to the regular Gradle build cache?",
        "options": [
            "It caches downloaded dependencies; the build cache caches task outputs.",
            "It caches the result of the configuration phase (the task graph and task inputs), allowing Gradle to skip the configuration phase entirely on subsequent builds if inputs haven't changed.",
            "It's a distributed cache shared across multiple developer machines.",
            "It caches only the `build.gradle` files themselves."
        ],
        "answer": "It caches the result of the configuration phase (the task graph and task inputs), allowing Gradle to skip the configuration phase entirely on subsequent builds if inputs haven't changed.",
        "explanation": "الـ Gradle build ليه مرحلتين أساسيتين قبل التنفيذ: Initialization و Configuration. مرحلة الـ Configuration هي اللي بتقرا كل الـ `build.gradle` scripts، تحدد الـ tasks اللي هتتنفذ، وتجهز الـ inputs بتاعتها. المرحلة دي ممكن تاخد وقت طويل في المشاريع الكبيرة. الـ Gradle Build Cache العادي بيعمل cache للـ output بتاع الـ tasks نفسها. أما الـ Configuration Cache، فده بيعمل cache لنتيجة مرحلة الـ Configuration كلها (الـ task graph). لو في الـ build اللي بعده، الـ inputs بتاعة الـ configuration phase (زي الـ build scripts نفسها، gradle properties، إلخ) متغيرتش، Gradle يقدر يعمل load للـ task graph ده من الـ cache ويتخطى مرحلة الـ Configuration كلها، وده بيسرع الـ build بشكل كبير جداً، خصوصاً في الـ builds اللي مفيهاش تغييرات كتير."
    },
    {
        "question": "82. What is the purpose of `WindowInsets` in modern Android development, particularly with edge-to-edge UI?",
        "options": [
            "To define the absolute pixel size of the application window.",
            "To handle configuration changes like screen rotation.",
            "To provide information about system UI elements that overlap or interact with the app's window (like status bars, navigation bars, keyboards), allowing the app to adjust its layout accordingly and draw behind them (edge-to-edge).",
            "To manage different display modes (e.g., HDR, high refresh rate)."
        ],
        "answer": "To provide information about system UI elements that overlap or interact with the app's window (like status bars, navigation bars, keyboards), allowing the app to adjust its layout accordingly and draw behind them (edge-to-edge).",
        "explanation": "الـ `WindowInsets` APIs الحديثة (خصوصاً في Jetpack Core و Compose) بتدي للتطبيق معلومات دقيقة عن المساحات اللي السيستم UI بيحتلها أو بيأثر فيها على شاشة التطبيق. ده بيشمل الـ status bar فوق، الـ navigation bar تحت (سواء 3-button أو gesture navigation)، والـ keyboard لما يظهر. باستخدام الـ insets دي، التطبيق يقدر يعرف المساحات الآمنة لوضع المحتوى بتاعه (عشان ميتغطاش بالـ system bars أو الـ keyboard) وفي نفس الوقت يقدر يرسم في المساحات اللي ورا الـ system bars (edge-to-edge) عشان يستغل الشاشة كلها ويوفر تجربة immersive أكتر، مع تطبيق padding مناسب بناءً على قيم الـ insets عشان المحتوى المهم يفضل ظاهر."
    },
    {
        "question": "83. When using Kotlin Flows, what is the difference between a 'cold' Flow and a 'hot' Flow (like `StateFlow` or `SharedFlow`)?",
        "options": [
            "Cold flows run on background threads, hot flows run on the main thread.",
            "Cold flows require `suspend` functions, hot flows do not.",
            "A cold Flow starts executing its producer code only when a terminal operator (like `collect`) is applied, and typically restarts for each new collector. A hot Flow exists and emits values independently of collectors; collectors get the current/future values.",
            "Cold flows are used for UI state, hot flows are used for network requests."
        ],
        "answer": "A cold Flow starts executing its producer code only when a terminal operator (like `collect`) is applied, and typically restarts for each new collector. A hot Flow exists and emits values independently of collectors; collectors get the current/future values.",
        "explanation": "الـ Flow العادي اللي بيتعمل بـ `flow { ... }` builder بيكون 'cold'. ده معناه إن الكود اللي جوه الـ builder (الـ producer) مش بيشتغل غير لما حد يعمل عليه `collect` (أو أي terminal operator تاني). وكل مرة حد جديد بيعمل `collect`، الكود بتاع الـ producer بيبدأ من الأول للـ collector ده. أما الـ Flows الـ 'hot' زي `StateFlow` و `SharedFlow`، فهي بتكون موجودة وشغالة وبتبعت قيم حتى لو مفيش حد بيعمل `collect`. لما collector جديد يبدأ يجمع منها، هو بياخد القيم الحالية (في حالة `StateFlow` أو `SharedFlow` مع `replay`) والقيم اللي جاية بعد كده. الـ Hot flows مناسبة لتمثيل حاجات ليها state أو أحداث بتحصل في التطبيق بشكل عام."
    },
    {
        "question": "84. What is the Android Keystore System primarily used for?",
        "options": [
            "Storing large amounts of application data securely.",
            "Managing user login credentials and session tokens.",
            "Providing a secure hardware-backed (or software) container for storing cryptographic keys (like signing or encryption keys) making them difficult to extract from the device.",
            "Caching compiled code (DEX files)."
        ],
        "answer": "Providing a secure hardware-backed (or software) container for storing cryptographic keys (like signing or encryption keys) making them difficult to extract from the device.",
        "explanation": "الـ Android Keystore هو system service بيوفر مكان آمن لتخزين وإدارة المفاتيح التشفيرية (cryptographic keys). الميزة الأساسية إن الـ key material نفسها (القيمة السرية للمفتاح) ممكن تتخزن جوه secure hardware (زي الـ Trusted Execution Environment - TEE أو Secure Element - SE) لو الجهاز بيدعم ده، أو على الأقل بتكون محمية بالـ OS. ده بيخلي عملية استخراج المفتاح من الجهاز صعبة جداً حتى لو الجهاز rooted. التطبيق يقدر يستخدم المفاتيح دي لعمليات تشفير/فك تشفير أو توقيع رقمي من غير ما يحتاج يتعامل مع الـ key material مباشرة، وده بيزود الأمان بشكل كبير."
    },
    {
        "question": "85. In Jetpack Compose, what is `SubcomposeLayout` and in what scenarios might it be useful?",
        "options": [
            "A layout that arranges children horizontally or vertically based on remaining space.",
            "A layout used for creating animated transitions between different Composables.",
            "A low-level layout primitive that allows measuring and laying out children during the parent's layout phase, often needed when a child's content depends on the space allocated by the parent *after* an initial measurement.",
            "A Composable specifically designed for nesting ScrollViews."
        ],
        "answer": "A low-level layout primitive that allows measuring and laying out children during the parent's layout phase, often needed when a child's content depends on the space allocated by the parent *after* an initial measurement.",
        "explanation": "`SubcomposeLayout` هو layout primitive متقدم وقوي في Compose. بيسمحلك تأجل جزء من الـ composition والـ measurement بتاع الـ children لوقت الـ layout phase بتاع الـ parent نفسه. يعني تقدر تقيس جزء من الـ layout الأول، وبناءً على النتيجة دي، تقرر إيه هي الـ Composables التانية اللي محتاج تعملها compose وتقيسها وتحدد مكانها. ده مفيد في سيناريوهات معقدة زي مثلاً: عمل layout زي الـ `BoxWithConstraints` (اللي بيديك الـ constraints الفعلية كـ state)، أو عمل UI زي الـ Dropdown Menu اللي محتوى الـ menu بيتعمله compose و measure بس لما الـ menu يتفتح وبيبقى معتمد على مكان الـ anchor اللي فتحه."
    },
    {
        "question": "86. What is the difference between `implementation`, `api`, and `compileOnly` dependency configurations in Gradle?",
        "options": [
            "`implementation` hides dependencies, `api` exposes them, `compileOnly` includes them only at runtime.",
            "`implementation` includes for compile/runtime but doesn't expose to consumers, `api` includes for compile/runtime and exposes to consumers, `compileOnly` includes only for compile time (not at runtime).",
            "`implementation` is for Java, `api` is for Kotlin, `compileOnly` is for annotations.",
            "They are interchangeable and only affect build speed."
        ],
        "answer": "`implementation` includes for compile/runtime but doesn't expose to consumers, `api` includes for compile/runtime and exposes to consumers, `compileOnly` includes only for compile time (not at runtime).",
        "explanation": "لما تعرف dependency في موديول A: `implementation`: الـ dependency دي بتكون متاحة للكود جوه موديول A في وقت الـ compile ووقت الـ runtime، لكن لو فيه موديول تاني B بيعتمد على A، موديول B مش هيقدر يشوف أو يستخدم الـ dependency دي مباشرة (transitive dependency). ده بيحسن الـ build speed لأن تغيير الـ dependency دي في A مش بيعمل recompile لـ B. `api`: زي `implementation` لكن الـ dependency دي بتكون exposed للموديولات اللي بتعتمد على A. يعني موديول B يقدر يستخدمها مباشرة. ده ضروري لو موديول A بيستخدم types من الـ dependency دي في الـ public API بتاعه. `compileOnly`: الـ dependency دي بتكون متاحة لموديول A في وقت الـ compile بس، لكن مش بتتضمن في الـ runtime classpath. ده مفيد لحاجات زي annotation processors أو libraries زي Lombok."
    },
    {
        "question": "87. What is 'Jank' in Android performance, and what tool is most commonly used to diagnose its specific causes (e.g., long measure/layout passes, slow drawing)?",
        "options": [
            "Slow network response time; diagnosed with Network Profiler.",
            "High memory usage; diagnosed with Memory Profiler.",
            "Skipped UI frames resulting in stuttering or non-smooth animations/scrolling; diagnosed primarily using Systrace/Perfetto to analyze VSYNC intervals and work done on the UI thread.",
            "Application crashes; diagnosed with Crashlytics."
        ],
        "answer": "Skipped UI frames resulting in stuttering or non-smooth animations/scrolling; diagnosed primarily using Systrace/Perfetto to analyze VSYNC intervals and work done on the UI thread.",
        "explanation": "الـ Jank هو المصطلح اللي بيستخدم لوصف الـ stutter أو الـ hiccups اللي بتحصل في الـ UI لما التطبيق مبيقدرش يجهز ويعرض frame جديد في الوقت المحدد بالـ VSYNC (عادة 16.6ms لشاشة 60Hz). ده بيخلي السيستم يعرض الـ frame القديم تاني وبيبان للمستخدم كتنتيشة أو عدم سلاسة في الحركة أو الـ scrolling. الأداة الأساسية لتشخيص سبب الـ jank هي Systrace (أو الأداة الأحدث والأقوى Perfetto). الأدوات دي بتسجل الأحداث اللي بتحصل على مستوى السيستم كله (CPU scheduling, UI thread work, RenderThread work, VSYNC signals) وبتعرضها على timeline، فتقدر تشوف بالظبط أنهي جزء من شغلك (زي measure/layout pass طويل، `onDraw` بطيء، شغل كتير على الـ UI thread، GC pause) هو اللي خد وقت أطول من الـ 16.6ms وسبب الـ frame drop."
    },
    {
        "question": "88. In Kotlin, what are 'reified type parameters' and what capability do they enable, often used with inline functions?",
        "options": [
            "Parameters that are automatically Parcelable.",
            "Type parameters that exist only at compile time and are erased at runtime.",
            "Type parameters (used with `inline` functions) whose actual type argument is preserved and accessible at runtime, allowing operations like `is` checks or getting the `::class.java` of the generic type.",
            "Parameters that can hold either a value or a function type."
        ],
        "answer": "Type parameters (used with `inline` functions) whose actual type argument is preserved and accessible at runtime, allowing operations like `is` checks or getting the `::class.java` of the generic type.",
        "explanation": "عادة في Kotlin/Java، الـ generic type information بيحصلها erasure وقت التشغيل، يعني مينفعش تعرف الـ actual type argument بتاع generic type parameter (زي `T` في `List<T>`). لكن لو عندك `inline` function وعلمت الـ type parameter بتاعها بكلمة `reified`، الكومبايلر بيعمل inline للكود بتاع الفانكشن دي وللـ actual type argument في المكان اللي بتناديها منه. ده بيخلي الـ type information متاحة وقت التشغيل جوه الـ inline function. بالتالي، تقدر تعمل حاجات زي `myVar is T` أو `T::class.java` جوه الفانكشن، وده مش ممكن مع الـ generic types العادية. ده مفيد جداً في عمل فانكشنز زي `myIntent.getParcelableExtra<MyType>(...)` أو `startActivity<MyActivity>(...)`."
    },
    {
        "question": "89. What is the purpose of `android:windowSoftInputMode` attribute in the `AndroidManifest.xml` for an Activity?",
        "options": [
            "To set the default keyboard type (numeric, text, etc.).",
            "To control how the activity's main window interacts with the soft keyboard: whether the window resizes (`adjustResize`), pans (`adjustPan`), or stays unchanged, and whether the keyboard is initially hidden or visible.",
            "To enable or disable hardware keyboard input.",
            "To change the visual theme of the soft keyboard."
        ],
        "answer": "To control how the activity's main window interacts with the soft keyboard: whether the window resizes (`adjustResize`), pans (`adjustPan`), or stays unchanged, and whether the keyboard is initially hidden or visible.",
        "explanation": "الـ attribute ده بيتحكم في حاجتين أساسيتين لما الـ soft keyboard (لوحة المفاتيح اللي بتظهر على الشاشة) تظهر أو تختفي وهي مرتبطة بـ Activity معينة: 1) الـ Adjustment Mode: إزاي الـ layout بتاع الـ Activity هيتأثر. أشهر قيمتين هما `adjustResize` (الـ Activity بيتعملها resize عشان المحتوى يبقى فوق الكيبورد، وده المفضل عادةً) و `adjustPan` (الـ Activity كلها بتتحرك لفوق عشان الـ input field اللي فيه focus يبقى ظاهر فوق الكيبورد، لكن ممكن يغطي جزء تاني من الـ UI). ممكن كمان تخليه `adjustNothing`. 2) الـ Visibility Mode: حالة الكيبورد الأولية لما الـ Activity تفتح (زي `stateHidden`, `stateVisible`, `stateUnchanged`)."
    },
    {
        "question": "90. What is the difference between `Context.getSystemService()` and `ContextCompat.getSystemService()`?",
        "options": [
            "`Context.getSystemService()` returns nullable types, `ContextCompat` returns non-nullable.",
            "`ContextCompat.getSystemService()` automatically requests permissions if needed.",
            "`ContextCompat.getSystemService()` provides a type-safe way to get system services using the service class (e.g., `NotificationManager::class.java`) and handles compatibility across different Android versions for some services, whereas `Context.getSystemService()` uses string constants and requires manual casting.",
            "`Context.getSystemService()` is faster as it's a direct call."
        ],
        "answer": "`ContextCompat.getSystemService()` provides a type-safe way to get system services using the service class (e.g., `NotificationManager::class.java`) and handles compatibility across different Android versions for some services, whereas `Context.getSystemService()` uses string constants and requires manual casting.",
        "explanation": "الطريقة القديمة `Context.getSystemService(String)` كانت بتاخد اسم الـ service كـ String constant (زي `Context.NOTIFICATION_SERVICE`) وبترجع `Object` عام بتحتاج تعمله cast للنوع الصح (زي `NotificationManager`). ده كان عرضة للأخطاء (typos في الـ String أو cast غلط). `ContextCompat.getSystemService(Context, Class<T>)` اللي جاية من مكتبة AndroidX (Jetpack) بتحل المشكلة دي. بتاخد الـ `Context` والـ `Class` بتاعة الـ service اللي أنت عايزه (زي `NotificationManager::class.java`) وبترجعلك object من النوع ده مباشرة (type-safe). بالإضافة لكده، لبعض الـ services، هي بتتعامل مع اختلافات بسيطة بين نسخ الأندرويد المختلفة."
    },
     {
        "question": "91. When might you choose to use a `Channel` over a `SharedFlow` in Kotlin Coroutines?",
        "options": [
            "When you need multiple collectors to receive the same stream of events.",
            "When you need a hot stream that represents state.",
            "For modeling producer-consumer scenarios where each element is intended to be processed by exactly one consumer, or for communication/synchronization between specific coroutines.",
            "When backpressure handling is not required."
        ],
        "answer": "For modeling producer-consumer scenarios where each element is intended to be processed by exactly one consumer, or for communication/synchronization between specific coroutines.",
        "explanation": "الـ `Channel` أقرب لمفهوم الـ blocking queue وبيستخدم أساساً للتواصل بين coroutines محددة (point-to-point or multi-point communication). هو مثالي لسيناريوهات الـ producer-consumer، يعني coroutine بينتج عناصر و coroutine تاني (أو أكتر) بيستهلكها، مع ضمان إن كل عنصر بيتم استهلاكه مرة واحدة بس (عادة). كمان ممكن تستخدمه للـ synchronization بين coroutines (زي استخدام `RENDEZVOUS` channel). أما `SharedFlow` فهو مصمم للـ broadcasting، يعني مصدر واحد بيبعت updates وكذا collector ممكن يستمعوا ليها في نفس الوقت وكل واحد ياخد نسخة من الـ update."
    },
    {
        "question": "92. What is the primary function of the Hardware Composer (HWC) HAL in the Android graphics stack?",
        "options": [
            "To execute GPU commands for rendering.",
            "To manage CPU scheduling for rendering threads.",
            "To composite different hardware-accelerated layers (e.g., from SurfaceView, textures, system UI) directly using dedicated display hardware, offloading work from the GPU and reducing power consumption.",
            "To decode video streams using hardware codecs."
        ],
        "answer": "To composite different hardware-accelerated layers (e.g., from SurfaceView, textures, system UI) directly using dedicated display hardware, offloading work from the GPU and reducing power consumption.",
        "explanation": "الأندرويد بيرسم الـ UI بتاعه في صورة layers منفصلة (زي الـ status bar, الـ navigation bar, الـ app UI, و ممكن surface تانية زي بتاعة فيديو). الـ Hardware Composer (HWC) Hardware Abstraction Layer (HAL) هو component بيشتغل مع الـ SurfaceFlinger. وظيفته إنه يشوف إيه هي الـ layers المتاحة دي ويحاول يعملها composite (يدمجها مع بعض عشان تظهر على الشاشة) باستخدام hardware متخصص في الـ display controller نفسه، بدل ما يخلي الـ GPU يعمل الشغل ده عن طريق الـ OpenGL/Vulkan. ده بيوفر شغل على الـ GPU وبيقلل استهلاك الطاقة، خصوصاً لو فيه layers كتير ثابتة أو بتتغير بشكل بسيط."
    },
    {
        "question": "93. What is the purpose of the `android.enableJetifier=true` flag in `gradle.properties`?",
        "options": [
            "Enables experimental Jetpack features.",
            "Forces all dependencies to use the latest Jetpack versions.",
            "Allows an AndroidX project to consume libraries that still depend on the old Support Library by automatically migrating their bytecode and resources during the build.",
            "Enables faster compilation using the JetBrains compiler."
        ],
        "answer": "Allows an AndroidX project to consume libraries that still depend on the old Support Library by automatically migrating their bytecode and resources during the build.",
        "explanation": "لما جوجل عملت ترحيل من الـ old Support Libraries لـ AndroidX، كتير من الـ third-party libraries خدت وقت عشان تحدث الـ dependencies بتاعتها. الـ Jetifier tool (اللي بيشتغل لما تحط الـ flag ده بـ `true`) بيحل المشكلة دي مؤقتاً. هو بيعمل scan للـ dependencies بتاعتك وقت الـ build، ولو لقى أي library لسه بتعتمد على الـ classes القديمة بتاعة الـ Support Library، هو بيعمل rewrite للـ bytecode بتاعها وللـ resources عشان تستخدم الـ classes المكافئة ليها في AndroidX. ده بيسمحلك تستخدم الـ libraries القديمة دي في مشروعك اللي معتمد على AndroidX من غير مشاكل compatibility. (حالياً، معظم الـ libraries اتحدثت والمفروض متعتمدش عليه لو مش محتاجه)."
    },
    {
        "question": "94. In Jetpack Compose, how can `derivedStateOf` help optimize recompositions?",
        "options": [
            "By ensuring state updates only happen on the main thread.",
            "By automatically saving state across process death.",
            "By creating a derived state that only triggers recomposition of its readers when its *result* changes, even if the underlying states it reads change more frequently.",
            "By converting a `MutableState` into an immutable `State`."
        ],
        "answer": "By creating a derived state that only triggers recomposition of its readers when its *result* changes, even if the underlying states it reads change more frequently.",
        "explanation": "تخيل عندك state بيعتمد على حسابات معينة من state تاني (أو أكتر). مثلاً، `val listIsEmpty = remember { derivedStateOf { myList.isEmpty() } }`. لو استخدمت `myList.isEmpty()` مباشرة جوه الـ Composable، أي تغيير في `myList` (حتى لو مش بيغير هل هي فاضية ولا لأ، زي إضافة عنصر لـ list مش فاضية أصلاً) هيعمل recomposition. لكن لما تستخدم `derivedStateOf`، الـ state الناتج (`listIsEmpty` في المثال ده) مش هيتغير ومش هيعمل trigger للـ recomposition بتاعة الـ Composables اللي بتقراه إلا لو *نتيجة* الـ calculation اللي جواه (`myList.isEmpty()` في المثال ده) هي اللي اتغيرت فعلاً (يعني الـ list بقت فاضية أو مبقتش فاضية). ده بيمنع recompositions ملهاش لازمة."
    },
    {
        "question": "95. What is the 'App Standby Buckets' feature introduced in Android P (9.0) primarily designed to do?",
        "options": [
            "Group apps visually on the home screen.",
            "Limit background network access, job execution, and alarms for apps based on usage frequency and recency, conserving battery.",
            "Provide different storage quotas for apps based on their category.",
            "Allow users to manually freeze background apps."
        ],
        "answer": "Limit background network access, job execution, and alarms for apps based on usage frequency and recency, conserving battery.",
        "explanation": "الـ App Standby Buckets هي ميزة لإدارة الطاقة. الأندرويد سيستم بيصنف التطبيقات في 'buckets' (زي Active, Working Set, Frequent, Rare, Restricted) بناءً على آخر مرة المستخدم فتح التطبيق ومدى تكرار استخدامه. كل bucket ليه قيود مختلفة على قدرة التطبيق إنه يشغل jobs في الخلفية، أو يعمل alarms، أو يوصل للشبكة وهو في الخلفية. التطبيقات اللي في الـ 'Active' bucket (اللي المستخدم بيستخدمها حالياً أو استخدمها قريب جداً) مبيبقاش عليها قيود تقريباً، بينما التطبيقات اللي في الـ 'Rare' أو 'Restricted' buckets بيبقى عليها قيود صارمة جداً. الهدف الأساسي هو تقليل استهلاك البطارية من التطبيقات اللي المستخدم مش بيستخدمها كتير."
    },
    {
        "question": "96. When using Kotlin's delegation (`by` keyword), what is the purpose of the `provideDelegate` operator function?",
        "options": [
            "To provide the initial value for the delegated property.",
            "To intercept the creation of the delegate instance itself, allowing for custom logic or returning a different delegate.",
            "To define the `getValue` operation for the delegate.",
            "To define the `setValue` operation for the delegate."
        ],
        "answer": "To intercept the creation of the delegate instance itself, allowing for custom logic or returning a different delegate.",
        "explanation": "عادة، لما بتكتب `val myProp by myDelegate()`, الكومبايلر بينادي `myDelegate()` عشان ياخد الـ instance بتاعة الـ delegate. لكن لو الـ type بتاع `myDelegate()` (أو extension function عليه) فيه operator function اسمها `provideDelegate`, الكومبايلر هينادي الفانكشن دي الأول. الفانكشن دي بتقدر تعمل أي logic أنت عايزه قبل ما الـ delegate instance الفعلي يتخلق، وممكن هي نفسها ترجع الـ delegate instance اللي هيستخدم (ممكن يكون مختلف عن اللي كان هيتعمل أصلاً). ده بيسمح بـ meta-programming أكتر وبيستخدم في بعض الـ libraries (زي Hilt أو غيرها) عشان تعمل setup للـ delegate قبل ما يستخدم."
    },
    {
        "question": "97. What is ANGLE (Almost Native Graphics Layer Engine) sometimes used for in Android development?",
        "options": [
            "A physics engine for game development.",
            "A UI layout preview tool.",
            "A translation layer that allows running OpenGL ES API calls on top of other graphics backends like Vulkan or DirectX, often used for compatibility or performance testing.",
            "An alternative build system to Gradle."
        ],
        "answer": "A translation layer that allows running OpenGL ES API calls on top of other graphics backends like Vulkan or DirectX, often used for compatibility or performance testing.",
        "explanation": "ANGLE هو مشروع مفتوح المصدر (بدأته جوجل) بيعمل implementation للـ OpenGL ES API فوق APIs تانية زي Vulkan, DirectX (على ويندوز), أو Metal (على أبل). في سياق أندرويد، ممكن يستخدم كطريقة لتشغيل تطبيقات أو ألعاب معتمدة على OpenGL ES على أجهزة ممكن يكون الـ Vulkan driver بتاعها أفضل أو أكتر استقراراً. كمان بيستخدم ساعات كـ default WebGL implementation في الـ WebView. ممكن المطورين يستخدموه لتجارب الأداء أو عشان يضمنوا compatibility مع درايفرات مختلفة."
    },
    {
        "question": "98. In Android's `ConstraintLayout`, what is the primary difference between using a `Guideline` and a `Barrier`?",
        "options": [
            "`Guideline` positions relative to parent, `Barrier` positions relative to other views.",
            "`Guideline` is visible, `Barrier` is invisible.",
            "A `Guideline` is a fixed vertical or horizontal line (defined by percentage or dp from edge) used as an anchor for constraining other views. A `Barrier` creates a virtual line based on the edges of multiple other views (e.g., ensuring View C starts after the rightmost edge of View A and View B).",
            "`Barrier` enforces aspect ratio, `Guideline` does not."
        ],
        "answer": "A `Guideline` is a fixed vertical or horizontal line (defined by percentage or dp from edge) used as an anchor for constraining other views. A `Barrier` creates a virtual line based on the edges of multiple other views (e.g., ensuring View C starts after the rightmost edge of View A and View B).",
        "explanation": "الـ `Guideline` هو خط وهمي (أفقي أو رأسي) بتقدر تحطه في مكان ثابت جوه الـ `ConstraintLayout` (يا إما بمسافة dp من الحافة أو بنسبة مئوية من العرض/الطول). بعدين بتقدر تعمل constrain للـ views التانية بالنسبة للخط ده. أما الـ `Barrier`، فهو برضه خط وهمي، لكن مكانه مش ثابت، مكانه بيتحدد بناءً على مجموعة من الـ views التانية. مثلاً، ممكن تعمل `Barrier` نوعه `END` بيعتمد على View A و View B، الـ Barrier ده هيمثل أقصى يمين لـ A و B مع بعض. بعدين ممكن تعمل constrain لـ View C إنه يبدأ بعد الـ Barrier ده، فكده تضمن إن C دايماً هيكون بعد أبعد واحد في A و B."
    },
    {
        "question": "99. What is the 'Input Dispatch Lag' in Android, and how might analyzing `inputflinger` traces in Perfetto help identify its cause?",
        "options": [
            "Delay between network request and response.",
            "Time taken for the disk I/O to complete.",
            "The delay between a physical input event (e.g., touch) occurring and the application actually receiving and processing that event.",
            "Lag caused by the garbage collector running."
        ],
        "answer": "The delay between a physical input event (e.g., touch) occurring and the application actually receiving and processing that event.",
        "explanation": "الـ Input Dispatch Lag هو التأخير الزمني بين اللحظة اللي المستخدم بيلمس فيها الشاشة (أو بيضغط زرار) واللحظة اللي التطبيق بتاعك بيستقبل فيها الـ event ده ويقدر يبدأ يتعامل معاه. التأخير ده ممكن يحصل بسبب كذا حاجة في الـ pipeline بتاع الـ input، زي إن الـ UI thread بتاع تطبيقك يكون مشغول جداً (blocked) فمش قادر يستقبل الـ event الجديد بسرعة. الـ `inputflinger` هو system service مسئول عن قراية الـ input events وتوزيعها على الـ windows المناسبة. تحليل الـ traces بتاعته (مع الـ app threads) في Perfetto أو Systrace بيسمحلك تشوف الـ timeline بتاع الـ event من أول ما السيستم استقبله لحد ما وصل لتطبيقك، وتحدد فين بالظبط حصل التأخير الكبير (هل التأخير في السيستم نفسه ولا بسبب إن الـ app thread بتاعك كان busy)."
    },
    {
        "question": "100. When might you use `Modifier.layoutId()` in Jetpack Compose, particularly within custom layouts or `ConstraintLayout`?",
        "options": [
            "To assign a unique ID for testing purposes using `onNodeWithTag`.",
            "To associate a Composable with a specific ID that can be referenced by the measure policy of a custom `Layout` or by the constraints set in a `ConstraintLayout` Composable, allowing placement based on ID rather than order.",
            "To control the Z-order (elevation) of Composables.",
            "To apply conditional padding based on the layout ID."
        ],
        "answer": "To associate a Composable with a specific ID that can be referenced by the measure policy of a custom `Layout` or by the constraints set in a `ConstraintLayout` Composable, allowing placement based on ID rather than order.",
        "explanation": "`Modifier.layoutId(id)` بيدى للـ Composable اللي متطبق عليه ID معين (ممكن يكون String أو أي object). الـ ID ده بيبقى ليه فايدة أساسية جوه الـ measure policy بتاعة `Layout` Composable (سواء custom layout أنت عامله أو `ConstraintLayout`). بدل ما تتعامل مع الـ children كـ list بالترتيب، بتقدر توصل لـ child معين عن طريق الـ ID بتاعه عشان تقيسه أو تحدد مكانه. في `ConstraintLayout` Compose، بتستخدم الـ IDs دي عشان تعمل createRefs() وتربط الـ constraints بين الـ Composables المختلفة بناءً على الـ ID بتاعها."
    }
];


// --- DOM Elements ---
const homepageContainer = document.getElementById('homepage-container');
const quizGrid = document.getElementById('quiz-grid');
const quizSectionContainer = document.getElementById('quiz-container'); // Renamed variable for clarity
const resultsContainer = document.getElementById('results-container');

const questionEl = document.getElementById('question');
const questionNumberEl = document.getElementById('question-number');
const totalQuestionsEl = document.getElementById('total-questions');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const feedbackTextEl = document.getElementById('feedback-text');
const explanationEl = document.getElementById('explanation');
const scoreEl = document.getElementById('score');
const totalScoreEl = document.getElementById('total-score');
const tryAgainBtn = document.getElementById('try-again-btn'); // Renamed variable
const backToHomeBtnQuiz = document.getElementById('back-to-home-btn-quiz');
const backToHomeBtnResults = document.getElementById('back-to-home-btn-results');

// --- State Variables ---
const QUESTIONS_PER_QUIZ = 10;
let currentQuizQuestions = []; // Holds questions for the currently selected quiz
let currentQuestionIndex = 0;
let currentQuizIndex = -1; // To track which quiz is active for "Try Again"
let score = 0;
let answerProcessed = false; // Flag to track if the current answer has been checked

// --- Functions ---

/**
 * Initializes the application view, showing the homepage and hiding others.
 */
function showHomepage() {
    currentQuizIndex = -1; // Reset active quiz index
    homepageContainer.classList.remove('hidden');
    quizSectionContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    createQuizCards(); // Generate cards when showing homepage
     // Scroll to top when returning home
    window.scrollTo(0, 0);
}

/**
 * Generates the quiz selection cards on the homepage.
 */
function createQuizCards() {
    quizGrid.innerHTML = ''; // Clear existing cards
    const totalQuestionsCount = allQuestions.length;
    const numQuizzes = Math.ceil(totalQuestionsCount / QUESTIONS_PER_QUIZ);

    for (let i = 0; i < numQuizzes; i++) {
        const startQuestionNum = i * QUESTIONS_PER_QUIZ + 1;
        // Calculate end number, ensuring it doesn't exceed total questions
        const endQuestionNum = Math.min((i + 1) * QUESTIONS_PER_QUIZ, totalQuestionsCount);

        const card = document.createElement('div');
        card.classList.add('quiz-card');
        card.dataset.quizIndex = i; // Store quiz index (0-based)

        const title = document.createElement('h3');
        title.innerText = `Quiz ${i + 1}`;

        const description = document.createElement('p');
        description.innerText = `Questions ${startQuestionNum}-${endQuestionNum}`;

        card.appendChild(title);
        card.appendChild(description);

        card.addEventListener('click', () => {
            startQuiz(i);
        });

        quizGrid.appendChild(card);
    }
}

/**
 * Starts a specific quiz based on its index.
 * @param {number} quizIndex - The 0-based index of the quiz to start.
 */
function startQuiz(quizIndex) {
    currentQuizIndex = quizIndex; // Store which quiz we are starting
    const startIndex = quizIndex * QUESTIONS_PER_QUIZ;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_QUIZ, allQuestions.length);
    currentQuizQuestions = allQuestions.slice(startIndex, endIndex);

    // Reset state for the new quiz
    currentQuestionIndex = 0;
    score = 0;
    answerProcessed = false;

    // Update UI
    homepageContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizSectionContainer.classList.remove('hidden');

     // Scroll to top when starting quiz
    window.scrollTo(0, 0);

    loadQuestion();
}

/**
 * Loads the current question data into the UI.
 */
function loadQuestion() {
    answerProcessed = false; // Reset flag for the new question
    feedbackEl.classList.add('hidden'); // Hide feedback from previous question
    submitBtn.innerText = 'Submit Answer';
    submitBtn.disabled = false; // Ensure submit is enabled

    if (!currentQuizQuestions || currentQuizQuestions.length === 0) {
        console.error("No quiz questions loaded!");
        showHomepage(); // Go back home if something is wrong
        return;
    }

    const currentQuestion = currentQuizQuestions[currentQuestionIndex];

    questionEl.innerText = currentQuestion.question;
    // Display question number within the current quiz (1 to N)
    questionNumberEl.innerText = currentQuestionIndex + 1;
    totalQuestionsEl.innerText = currentQuizQuestions.length; // Total in this quiz chunk
    optionsContainer.innerHTML = ''; // Clear previous options

    // Create options
    currentQuestion.options.forEach((option, index) => {
        const optionId = `option${index}`;
        const optionDiv = document.createElement('div');

        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.id = optionId;
        radioBtn.name = 'option';
        radioBtn.value = option;
        radioBtn.disabled = false; // Ensure options are enabled initially

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.innerText = option;

        optionDiv.appendChild(radioBtn);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);

         // Add event listener to enable submit button on selection
        radioBtn.addEventListener('change', () => {
             if (!answerProcessed) { // Only enable if answer not yet processed
                 submitBtn.disabled = false;
             }
        });
    });

    // Initially disable submit button until an option is selected
    submitBtn.disabled = true;

}

/**
 * Checks the selected answer against the correct answer and provides feedback.
 */
function checkAnswer() {
    const selectedOptionInput = document.querySelector('input[name="option"]:checked');

    if (!selectedOptionInput) {
        // This check might become redundant due to disabling submit initially,
        // but kept as a safeguard.
        alert('Please select an answer!');
        submitBtn.disabled = true; // Re-disable if somehow clicked without selection
        return;
    }

    answerProcessed = true; // Mark that the answer for this question is processed
    const userAnswer = selectedOptionInput.value;
    const currentQuestion = currentQuizQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    // Disable options after selection
    document.querySelectorAll('input[name="option"]').forEach(input => {
        input.disabled = true;
    });

    // Show feedback
    feedbackEl.classList.remove('hidden', 'correct', 'incorrect'); // Reset classes
    explanationEl.innerText = currentQuestion.explanation || "No explanation provided."; // Set explanation text safely
    explanationEl.dir = explanationEl.innerText.match(/[\u0600-\u06FF]/) ? 'rtl' : 'ltr'; // Auto-detect direction


    if (userAnswer === correctAnswer) {
        score++;
        feedbackTextEl.innerText = 'Correct!';
        feedbackEl.classList.add('correct');
    } else {
        feedbackTextEl.innerText = `Incorrect. The correct answer was: "${correctAnswer}"`;
        feedbackEl.classList.add('incorrect');
    }

    // Change button to "Next Question" or "Show Results"
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        submitBtn.innerText = 'Next Question';
    } else {
        submitBtn.innerText = 'Show Results';
    }
     // Re-enable the button (now acting as Next/Results)
    submitBtn.disabled = false;
}

/**
 * Displays the final results of the current quiz.
 */
function showResults() {
    quizSectionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreEl.innerText = score;
    totalScoreEl.innerText = currentQuizQuestions.length; // Total is the size of the current quiz chunk
     // Scroll to top when showing results
    window.scrollTo(0, 0);
}

// --- Event Listeners ---

submitBtn.addEventListener('click', () => {
    if (!answerProcessed) { // If answer hasn't been processed yet for the current question
        checkAnswer();
    } else { // If answer was processed, button means "Next" or "Show Results"
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuizQuestions.length) {
            loadQuestion(); // Load next question in the current quiz
        } else {
            showResults(); // Show results for the current quiz
        }
    }
});

// "Try Again" button restarts the *current* quiz
tryAgainBtn.addEventListener('click', () => {
    if (currentQuizIndex !== -1) { // Ensure a quiz was actually active
         startQuiz(currentQuizIndex); // Restart the same quiz
    } else {
        showHomepage(); // Fallback to homepage if state is somehow lost
    }
});

// Back buttons navigate to the homepage
backToHomeBtnQuiz.addEventListener('click', showHomepage);
backToHomeBtnResults.addEventListener('click', showHomepage);

// --- Initial Load ---
showHomepage(); // Start by showing the homepage