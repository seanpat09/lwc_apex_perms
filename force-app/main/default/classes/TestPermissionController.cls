public with sharing class TestPermissionController {
    @AuraEnabled(cacheable=true)
    public static String getTestString() {
        return 'Hello world';
    }
}
