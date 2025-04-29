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