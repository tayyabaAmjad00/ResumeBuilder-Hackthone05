var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var shareLinkDiv = document.getElementById('share-link');
var resumeURLInput = document.getElementById('resume-url');
var copyLinkButton = document.getElementById('copy-link');
var downloadResumeButton = document.getElementById('download-resume');
var profilePicInput = document.getElementById('profile-pic');
function encodeFormData(name, email, phone, education, workExperience, skills) {
    var data = { name: name, email: email, phone: phone, education: education, workExperience: workExperience, skills: skills };
    return btoa(JSON.stringify(data)); // Base64 encode the JSON string
}
function generateUniqueURL(name, email, phone, education, workExperience, skills) {
    var encodedData = encodeFormData(name, email, phone, education, workExperience, skills);
    return "".concat(window.location.origin, "/resume/").concat(encodedData);
}
function generateEditableSection(title, content) {
    return "\n    <div class=\"editable-section\">\n      <h2>".concat(title, "</h2>\n      <p class=\"editable-content\" contenteditable=\"false\">").concat(content, "</p>\n      <div class=\"button-group\">\n        <button class=\"edit-button\">Edit</button>\n        <button class=\"save-button hidden\">Save</button>\n      </div>\n    </div>\n  ");
}
function generateEditableListSection(title, items) {
    var listItems = items.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join('');
    return "\n    <div class=\"editable-section\">\n      <h2>".concat(title, "</h2>\n      <ul class=\"editable-content\" contenteditable=\"false\">\n        ").concat(listItems, "\n      </ul>\n      <div class=\"button-group\">\n        <button class=\"edit-button\">Edit</button>\n        <button class=\"save-button hidden\">Save</button>\n      </div>\n    </div>\n  ");
}
function generatePersonalInfoSectionWithEdit(name, email, phone, profilePicSrc) {
    var imgHtml = '';
    if (profilePicSrc) {
        imgHtml = "\n      <img src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture\" id=\"profile-pic-output\" />\n      <div class=\"button-group\">\n        <button class=\"edit-profile-pic-button\">Edit Picture</button>\n      </div>\n    ");
    }
    return "\n    <div class=\"editable-section\" id=\"personal-info-section\">\n      <h2>Personal Information</h2>\n      ".concat(imgHtml, "\n      <p class=\"editable-content\" contenteditable=\"false\"><strong>Name:</strong> ").concat(name, "</p>\n      <p class=\"editable-content\" contenteditable=\"false\"><strong>Email:</strong> ").concat(email, "</p>\n      <p class=\"editable-content\" contenteditable=\"false\"><strong>Phone:</strong> ").concat(phone, "</p>\n      <div class=\"button-group\">\n        <button class=\"edit-button\">Edit</button>\n        <button class=\"save-button hidden\">Save</button>\n      </div>\n    </div>\n  ");
}
function handleProfilePic(file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        resolve(reader.result);
                    };
                    reader.onerror = function () {
                        reject('Error reading profile picture.');
                    };
                    reader.readAsDataURL(file);
                })];
        });
    });
}
form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, education, workExperience, skills, profilePicFile, populateResume, profilePicSrc, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById('name').value;
                email = document.getElementById('email').value;
                phone = document.getElementById('phone').value;
                education = document.getElementById('education').value;
                workExperience = document.getElementById('work-experience').value;
                skills = document.getElementById('skills').value.split('\n').filter(function (skill) { return skill.trim() !== ''; });
                profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
                populateResume = function (profilePicSrc) {
                    resumeOutput.innerHTML = "\n      ".concat(generatePersonalInfoSectionWithEdit(name, email, phone, profilePicSrc), "\n      ").concat(generateEditableSection('Education', education), "\n      ").concat(generateEditableSection('Work Experience', workExperience), "\n      ").concat(generateEditableListSection('Skills', skills), "\n    ");
                    resumeOutput.classList.remove('hidden');
                    shareLinkDiv.classList.remove('hidden');
                    var resumeURL = generateUniqueURL(name, email, phone, education, workExperience, skills);
                    resumeURLInput.value = resumeURL;
                };
                if (!profilePicFile) return [3 /*break*/, 5];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, handleProfilePic(profilePicFile)];
            case 2:
                profilePicSrc = _b.sent();
                populateResume(profilePicSrc);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                populateResume();
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                populateResume();
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
function toggleEditSave(button, saveButton, contentElement) {
    if (button.textContent === 'Edit') {
        contentElement.setAttribute('contenteditable', 'true');
        contentElement.focus();
        button.classList.add('hidden');
        saveButton.classList.remove('hidden');
    }
}
function saveContent(button, editButton, contentElement) {
    if (button.textContent === 'Save') {
        contentElement.setAttribute('contenteditable', 'false');
        button.classList.add('hidden');
        editButton.classList.remove('hidden');
    }
}
function downloadResumeAsPDF() {
    var resumeHtml = resumeOutput.innerHTML;
    // Create a new window with the resume content
    var pdfWindow = window.open('', '', 'width=800,height=600');
    pdfWindow.document.write('<html><head><title>Resume</title></head><body>');
    pdfWindow.document.write(resumeHtml);
    pdfWindow.document.write('</body></html>');
    pdfWindow.document.close();
    // Use the browser's print dialog to save as PDF
    pdfWindow.print();
}
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('edit-button')) {
        var button = target;
        var parentSection = button.closest('.editable-section');
        if (parentSection) {
            var saveButton = parentSection.querySelector('.save-button');
            var contentElement = parentSection.querySelector('.editable-content');
            if (saveButton && contentElement) {
                toggleEditSave(button, saveButton, contentElement);
            }
        }
    }
    if (target.classList.contains('save-button')) {
        var button = target;
        var parentSection = button.closest('.editable-section');
        if (parentSection) {
            var editButton = parentSection.querySelector('.edit-button');
            var contentElement = parentSection.querySelector('.editable-content');
            if (editButton && contentElement) {
                saveContent(button, editButton, contentElement);
            }
        }
    }
    if (target.classList.contains('edit-profile-pic-button')) {
        var button = target;
        var parentSection_1 = button.closest('.editable-section');
        if (parentSection_1) {
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = function (e) {
                var input = e.target;
                if (input.files && input.files[0]) {
                    var file = input.files[0];
                    var reader_1 = new FileReader();
                    reader_1.onload = function () {
                        var imgElement = parentSection_1.querySelector('#profile-pic-output');
                        if (imgElement) {
                            imgElement.src = reader_1.result;
                        }
                    };
                    reader_1.readAsDataURL(file);
                }
            };
            fileInput.click();
        }
    }
    if (target.id === 'copy-link') {
        resumeURLInput.select();
        document.execCommand('copy');
        alert('Resume link copied to clipboard!');
    }
    if (target.id === 'download-resume') {
        downloadResumeAsPDF();
    }
});
window.addEventListener('load', function () {
    var path = window.location.pathname;
    var encodedData = path.split('/resume/')[1];
    if (encodedData) {
        var dataString = atob(encodedData); // Base64 decode
        var _a = JSON.parse(dataString), name_1 = _a.name, email = _a.email, phone = _a.phone, education = _a.education, workExperience = _a.workExperience, skills = _a.skills;
        // Populate the form with the data
        document.getElementById('name').value = name_1;
        document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        document.getElementById('education').value = education;
        document.getElementById('work-experience').value = workExperience;
        document.getElementById('skills').value = skills.join('\n');
        // Trigger the form submit to show the resume
        form.dispatchEvent(new Event('submit'));
    }
});